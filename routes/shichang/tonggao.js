const template = require('../template_page');

const options = {
    feed_title: '国家市场监督管理总局 - 通告',
    feed_desc: '国家市场监督管理总局 - 通告',
    feed_image: 'http://samr.saic.gov.cn/images/logo.png',
    feed_url: 'http://samr.saic.gov.cn/tg/',
    url: 'http://samr.saic.gov.cn/tg/',
    baseUrl: 'http://samr.saic.gov.cn/tg/',
    list_slr: ['ul', '.Three_zhnlist_02'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: '.nav04Left02_contenttime',
    cn: false,
};

module.exports = template(options);
