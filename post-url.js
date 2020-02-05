const fs = require('fs'),
    path = require('path'),
    moment = require('moment'),
    { unfurl } = require('unfurl.js'),
    { JekyllUrl, slugify } = require('jekyll-utils'),
    YAML = require('yaml'),
    truncate = require('truncate');

const url = new URL(process.argv[2]);

/**
 * Read the Jekyll configuration
 * 
 * @returns Object
 */
const config = async function() {
    const filePath = '_config.yml';

    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if(err) {
                return reject(err);
            }

            resolve(YAML.parse(data.toString()));
        });
    });
}

/**
 * Generate a truncated summary using supplied description
 * 
 * @param String description 
 * @returns String
 */
const postSummary = function (description) {
    return truncate(description.replace(/\n/g, ' ↵ '), 155);
};

/**
 * Generate template file for post using Jekyll format
 * 
 * @param Object post 
 * @returns String
 */
const generatePost = function (post) {
    const frontMatter = YAML.stringify({
        layout: 'post',
        title: post.title,
        tags: ['link'],
        summary: post.summary,
    });

    const template = `---
${frontMatter}---

[${post.title}](${post.link})

<blockquote><p>
${post.description.replace(/\n/g, '<br>')}
</p></blockquote>
`;
    return template;
};

/**
 * Write post to file using the supplied template
 * 
 * @param Object post
 * @param String template 
 * @returns Promise
 */
const writePost = async function (post, template) {
    const filePath = path.join(
        '_posts', 
        moment(post.date).format('YYYY-MM-DD') + '-' + post.slug + '.md'
    );

    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, template, (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};

(async () => {
    //Unfurl supplied URL
    const details = await unfurl(url.toString());
    //Build details on the post
    const post = {
        config: await config(),
        title: details.title,
        slug: slugify(details.title),
        description: details.description || details.title,
        summary: postSummary(details.description || details.title),
        date: new Date(),
        link: url,
    };
    //Supply the URL to the post
    post.url = new JekyllUrl({
        template: post.config.permalink,
        placeholders: { output_ext: '.html', title: post.slug },
    }).toString();
    post.url = new URL(post.url, post.config.url).toString();

    //Write post to file
    await writePost(post, generatePost(post));

    //Output the URL
    console.log(post.url);
})();

