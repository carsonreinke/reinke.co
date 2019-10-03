---
layout: post
title: Moving images for libvirt/qemu
date: '2018-01-20T16:14:40-05:00'
tags: []
tumblr_url: https://reinke.co/post/169933770517/moving-images-for-libvirtqemu
---
I had to do this and wanted to share how to do this, as it was actually pretty easy.

By default, `libvirt` images are placed in `/var/lib/libvirt/images`.&nbsp; There will be an image file and a backing file(s), both will have extension `.img`.&nbsp; Move all these files and copy the backing files to the new location.

Next, modify the configuration file, on my system this was location under `/etc/libvirt/qemu`.&nbsp; Change location of the `file` attribute of element `source` to your new location.

Last, use `qemu-img` to change the backing file to the new location.&nbsp; You can do this by using `qemu-img rebase -b [backing file] [image file]`.&nbsp; After that, you can remove the backing files under `/var/lib/libvirt/images`.

