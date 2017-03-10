

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- 数据库: `baidunews`
-- 

-- --------------------------------------------------------

-- 
-- 表的结构 `news`
-- 

CREATE TABLE `news` (
  `id` int(11) NOT NULL auto_increment,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=35 ;

-- 
-- 导出表中的数据 `news`
-- 

INSERT INTO `news` VALUES (21, '精选', '习近平“2.19”讲话一周年，人民日报发重磅文章', 'img/1.jpeg', '2017-03-01 00:00:00', '网易要闻');
INSERT INTO `news` VALUES (20, '精选', '中央一号文件对农民有啥影响？承包关系仍长久不变', 'img/1.jpeg', '2017-03-01 00:00:00', '凤凰头条');
INSERT INTO `news` VALUES (22, '精选', '领导干部必须严格自律', 'img/1.jpeg', '2017-03-01 00:00:00', '热点');
INSERT INTO `news` VALUES (23, '百家', '一年之计在于春，习近平春节后干了哪些大事', 'img/1.jpeg', '2017-03-01 00:00:00', '网易');
INSERT INTO `news` VALUES (24, '百家', '【治国理政新实践·四川篇】推进军民融合 四川今年要做12件大事', 'img/1.jpeg', '2017-03-01 00:00:00', '网易');
INSERT INTO `news` VALUES (25, '百家', '习近平4次研讨班讲话涵盖“四个全面”', 'img/1.jpeg', '2017-03-01 00:00:00', '网易');
INSERT INTO `news` VALUES (27, '本地', '这一年上了热搜的几件大事', 'img/1.jpeg', '2017-03-01 00:00:00', '凤凰头条');
INSERT INTO `news` VALUES (31, '娱乐', '习近平的人民观', 'img/1.jpeg', '2017-03-01 00:00:00', '娱乐圈');
INSERT INTO `news` VALUES (29, '本地', '从华盛顿驶向杭州 习近平启动G20巨轮双引擎 ', 'img/1.jpeg', '2017-03-01 00:00:00', '科技');
INSERT INTO `news` VALUES (32, '军事'.'党的十八大以来推进全面依法治国述评', 'img/1.jpeg', '2017-03-01 00:00:00', '凤凰头条');
