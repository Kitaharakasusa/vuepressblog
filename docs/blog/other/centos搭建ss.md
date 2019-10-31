---
title: centos搭建ss
date: 2019-06-15 00:14:29
categories: 技术
tags:
---

第一歩：下载pip环境和shadowsocks服务端

```
yum install python-setuptools && easy_install pip  
pip install shadowsocks
```

修改配置文件/etc/shadowsocks.json，如果没有则新建。
内容如下：

```
{  
    "server":"0.0.0.0",  
    "server_port":8388,  
    "local_address": "127.0.0.1",  
    "local_port":1080,  
    "password":"mypassword",  
    "timeout":300,  
    "method":"aes-256-cfb",  
    "fast_open": false  
}
```

多账号：

```
{  
    "server":"0.0.0.0",  
    "port_password":{  
     "8381":"xxxxxxx",  
     "8382":"xxxxxxx",  
     "8383":"xxxxxxx",  
     "8384":"xxxxxxx"  
     },  
    "timeout":300,  
    "method":"aes-256-cfb",  
    "fast_open": false  
}
```

含义

| 字段          | 说明                            |
| :------------ | :------------------------------ |
| server        | ss服务监听地址                  |
| server_port   | ss服务监听端口                  |
| local_address | 本地的监听地址                  |
| local_port    | 本地的监听端口                  |
| password      | 密码                            |
| timeout       | 超时时间，单位秒                |
| method        | 加密方法，默认是aes-256-cfb     |
| fast_open     | 使用TCP_FASTOPEN, true / false  |
| workers       | workers数，只支持Unix/Linux系统 |

前台启动

```
ssserver -c /etc/shadowsocks.json
```

后台启动与停止

```
ssserver -c /etc/shadowsocks.json -d start  
ssserver -c /etc/shadowsocks.json -d stop
```

开机启动

修改/etc/rc.local，加入以下内容

```
ssserver -c /etc/shadowsocks.json -d start
```

ss客户端下载地址

```
Windows
https://github.com/shadowsocks/shadowsocks-windows/releases   
  
Mac OS X
https://github.com/shadowsocks/ShadowsocksX-NG/releases 

Linux
https://github.com/shadowsocks/shadowsocks-qt5/wiki/Installation   
https://github.com/shadowsocks/shadowsocks-qt5/releases  

IOS
https://itunes.apple.com/app/apple-store/id1070901416?pt=2305194&ct=shadowsocks.org&mt=8
https://github.com/shadowsocks/shadowsocks-iOS/releases

Android
https://play.google.com/store/apps/details?id=com.github.shadowsocks   
https://github.com/shadowsocks/shadowsocks-android/releases
```

## serverspeeder加速安装

注意：serverspeeder加速是可选的，如果你使用vpn测速发现很慢，可以安装试试。

```
wget -N --no-check-certificate https://github.com/91yun/serverspeeder/raw/master/serverspeeder.sh && bash serverspeeder.sh
```

如果报内核不支持，可以更换系统内核

```
下载内核安装包  
wget http://ftp.scientificlinux.org/linux/scientific/6.6/x86_64/updates/security/kernel-2.6.32-504.3.3.el6.x86_64.rpm  
  
更换内核  
rpm -ivh kernel-2.6.32-504.3.3.el6.x86_64.rpm --force  
  
重启  
reboot  
  
查看内核版本是否替换成功  
cat /proc/version
```

我centos 7 替换了内核，好像启动不了 mmp