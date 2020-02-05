const fs = require('fs'),
    path = require('path'),
    moment = require('moment'),
    { unfurl } = require('unfurl.js'),
    { JekyllUrl, slugify } = require('jekyll-utils'),
    YAML = require('yaml'),
    truncate = require('truncate');

const url = new URL(process.argv[2]);

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
 * 
 * @param {*} description 
 */
const postSummary = function (description) {
    return truncate(description.replace(/\n/g, ' ↵ '), 155);
};

/**
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
 * 
 * @param {*} template 
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
        description: details.description,
        summary: postSummary(details.description),
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

