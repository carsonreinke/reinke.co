---
layout: post
title: 'ActiveModel::Serialization#serializable_hash Excluding Nested Attributes '
date: '2014-04-29T13:04:08-04:00'
tags:
- ruby
- rails
tumblr_url: https://reinke.co/post/84235685137/activemodelserializationserializablehash
---
For some reason, the documentation does not go into the options available for `ActiveModel::Serialization#serializable_hash`. Primarily, how nested attributes can be excluded via the `:include` option. Each nested attributes can provide a hash of options for that object. For example, if `Person` has an association of `projects`, `person.serializable_hash({:include => {:projects => {:except => [:id]}})` will exclude the `id` attribute of from projects. These options apply to all the Rails methods that render via serializers (e.g. `respond_with`, `render`).

