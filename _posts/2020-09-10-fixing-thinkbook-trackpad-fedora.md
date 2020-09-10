---
layout: post
title: "Fixing ThinkBook Trackpad On Fedora"
tags: []
---

I recently purchased a new Lenovo ThinkBook 14 and installed Fedora, unfortunately there is an issue with BIOS preventing the trackpad from working correctly.

Luckily I came across [this bug report with a solution](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1861610/comments/66), however, since I was using Fedora a few tweaks had to be made.  I also knew from [another RedHat bug report](https://bugzilla.redhat.com/show_bug.cgi?id=1842039) it was possible for it to work on Fedora.

Below are the steps I took to accomplish this (assume all are `sudo`):

1. `dnf install acpidump iasl cpio`
2. `acpidump -b`
3. `iasl -d dsdt.dat`
4. `vim dsdt.dsl`
5. Locate `TPVD == 0x45` and comment out block like below:

```
Method (_STA, 0, NotSerialized)  // _STA: Status
  {
    //If ((TPVD == 0x45))
      //{
          Return (0x0F)
      //}
      //Return (Zero)
  }
```

6. On line 21, increment the version number like so: `DefinitionBlock ("", "DSDT", 2, "LENOVO", "ICL     ", 0x20170002)`
7. `iasl -sa dsdt.dsl`
8. `cp dsdt.aml /boot/acpi_fixed.aml`
9. `vim /boot/efi/EFI/fedora/custom.cfg` and add to the file `acpi /acpi_fixed.aml`
10. `grub2-mkconfig -o /boot/efi/EFI/fedora/grub.cfg`
11. `vim /etc/modprobe.d/blacklist.conf` and add the following:

```
#Allow module elan_i2c to control the touch pad
blacklist i2c_hid
```

12. Reboot

Good luck!