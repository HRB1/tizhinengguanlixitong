import Mock from 'mockjs'
Mock.mock('/allData', ({ body }) => {
    let { limit, pageId } = JSON.parse(body)
    let start = (pageId - 1) * limit
    return Mock.mock({
        [`data|${limit}`]:[{
            "name": "@cname",
            "id|+1": 0,
            "tag|+1":start,
            "date": "@date(2018-MM-dd)",
            "img|1": ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568179670351&di=569a5cd4f3b6d13a68e9ced075aba3db&imgtype=0&src=http%3A%2F%2Fpic109.huitu.com%2Fres%2F20180825%2F45801_20180825223743987035_1.jpg'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568201180&di=312ae7a0a20f05f2ace16cc85499b8fd&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.gtimg.com%2Fnews%2Fpics%2Fhv1%2F13%2F156%2F1864%2F121246393.png'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568179792819&di=8b691315458dd63b92f0d08cdb1c9ed7&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Flarge%2F001UaiE5zy76ZbtbgT8f2'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568179884608&di=04b7fe2b0914c6f84594ad730c8ad351&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fhn%2Fpics%2Fhv1%2F244%2F45%2F2242%2F145797769.jpg'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568179940208&di=2484f0bc23399b89294746b211c82d6c&imgtype=0&src=http%3A%2F%2Fwww.hinews.cn%2Fpic%2F0%2F17%2F43%2F74%2F17437486_837542.jpg'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568180008643&di=29572c3362d20aea325548885b4384a9&imgtype=0&src=http%3A%2F%2Fpic105.huitu.com%2Fres%2F20180407%2F45801_20180407195946545031_1.jpg'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568180029271&di=60928ee231c5c003bb3fa8d5608208bd&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F6k%2Fnl%2FQJ8559083043.jpg'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568180048746&di=1915ed7968681227c97a16e6c52be17a&imgtype=0&src=http%3A%2F%2Fp3.so.qhmsg.com%2Ft01d0aea91228967ffa.jpg'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568180183587&di=55140e7a21ad0e0a601507443afafcff&imgtype=0&src=http%3A%2F%2Fpic96.huitu.com%2Fres%2F20170623%2F103292_20170623172103968050_1.jpg'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568180494788&di=9cbb3686524374523ce4d247a1272020&imgtype=0&src=http%3A%2F%2Fnews.youth.cn%2Fjy%2F201606%2FW020160606272250235727.jpg'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568775242&di=b433b2e9ffecedf40627f0e3290b59ee&imgtype=jpg&er=1&src=http%3A%2F%2Fimgcdn.gz01.bdysite.com%2Fupfile%2Ft01b00eab3900cea9c3.jpg'
                , 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1582687584,1984656194&fm=15&gp=0.jpg'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568180610120&di=f0fc159e6c9e5025f90620eb6bbe2867&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fx0%2Fzb%2FQJ7109031454.jpg%3Fx-oss-process%3Dstyle%2F670ws'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568180664367&di=fcd0ea90e4b71e6274c4d99778c611db&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190814%2Ff4cf81680ed749e4836db1486cc355da.jpeg'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568775461&di=26b84c7be0be4c428b8a066ddffb3979&imgtype=jpg&er=1&src=http%3A%2F%2Fpic109.huitu.com%2Fres%2F20180825%2F45801_20180825223521389035_1.jpg'
                , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568181974353&di=e10f0bb8258fd8f197677743651a0ff8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201606%2F08%2F20160608195543_BZVjA.thumb.700_0.jpeg'
                ,'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=158842662,4179372940&fm=26&gp=0.jpg'
            ]
        }]
    })
})
