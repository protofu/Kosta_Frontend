import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import MainWrap from "./MainWrap";
import Footer from "./Footer";
import Styles from "../../Styles/BlogMain.module.css";


const blogData = {
    header: {
        title: 'React.js',
        description: 'react blog'
    },
    nav: [
        {
            name: 'html5',
            linkUrl: '#'
        },
        {
            name: 'css',
            linkUrl: '#'
        },
        {
            name: 'javascript',
            linkUrl: '#'
        },
        {
            name: 'react',
            linkUrl: '#'
        }
    ],
    aside: {},
    mainwrap: {
        posts: [
            { title: 'aaa', date: '2024.06.24', imgUrl: 'https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg', content: 'Hi1' },
            { title: 'bbb', date: '2024.06.10', imgUrl: 'https://mblogthumb-phinf.pstatic.net/MjAyMjAyMTZfMTk2/MDAxNjQ1MDEyNDk1MzMx.LU8EG3hLgo-2UkjYqTD4Wl5MIBwOiWpyRaEjAjvDDtgg.xPebkTrNTs3b4t2ziQo_pWDFnmE54C1Q6zwgpqDMQ94g.JPEG.minziminzi128/IMG_8498.JPG?type=w800', content: 'Hi2' },
            { title: 'ccc', date: '2024.06.05', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMM4zzl91gfX4JidkjeT_jqJfcxxcAHt7ow&s', content: 'Hi3' }
        ],
        recentPosts: [
            {
                name: '111',
                linkUrl: '#'
            },
            {
                name: '222',
                linkUrl: '#'
            },
            {
                name: '333',
                linkUrl: '#'
            }
        ]
    },
    copyright: 'copyright by JH'
}

function BlogMain() {
    return (
        <div className={Styles.container}>
            <Header header={blogData.header}></Header>
            <Nav nav={blogData.nav}></Nav>
            <MainWrap posts={blogData.mainwrap.posts} recentPosts={blogData.mainwrap.recentPosts}></MainWrap>
            <Footer copyright={blogData.copyright}></Footer>
        </div>
    )
}

export default BlogMain;