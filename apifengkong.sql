-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 10 月 16 日 01:43
-- 服务器版本: 5.5.40
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `apifengkong`
--

-- --------------------------------------------------------

--
-- 表的结构 `account_recharge_log`
--

CREATE TABLE IF NOT EXISTS `account_recharge_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `integrate` int(11) DEFAULT NULL,
  `recharge_time` datetime DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn9e5nt71wvybs8yv93rqbd2nk` (`customer_id`),
  KEY `FK7j36mocswafhngv53p8lyyljk` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `account_recharge_log`
--

INSERT INTO `account_recharge_log` (`id`, `integrate`, `recharge_time`, `customer_id`, `user_id`) VALUES
(1, 22222, '2017-09-28 10:44:45', 2, 2),
(2, 2333, '2017-09-27 09:34:56', 2, 3),
(3, 1111, '2017-08-29 09:35:43', 4, 2),
(4, 200, '2017-08-08 16:22:01', 2, 1);

-- --------------------------------------------------------

--
-- 表的结构 `api_parameter_couple`
--

CREATE TABLE IF NOT EXISTS `api_parameter_couple` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `search_parameter` varchar(255) DEFAULT NULL,
  `uniform_parameter` varchar(255) DEFAULT NULL,
  `default_value` varchar(255) DEFAULT NULL,
  `param_desc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=48 ;

--
-- 转存表中的数据 `api_parameter_couple`
--

INSERT INTO `api_parameter_couple` (`id`, `search_parameter`, `uniform_parameter`, `default_value`, `param_desc`) VALUES
(5, 'shouji', 'cellphone', NULL, 'ali手机号'),
(6, 'name', 'name', NULL, 'youfen姓名'),
(8, 'idcard', 'idCard', NULL, 'youfen身份证'),
(9, 'cellphone', 'cellphone', NULL, 'youfen手机号'),
(13, 'account', NULL, NULL, 'youfen账户开立时分配，每个接入方的唯一标识'),
(14, 'name', 'companyName', NULL, 'youfen准确的商户名称'),
(15, 'merchantNo', 'merchantNum', NULL, 'youfen商户编号或商户编号识别码'),
(16, 'regNo', 'registeredNum', NULL, 'youfen营业执照注册编号'),
(17, 'legalName', 'merchantName', NULL, 'youfen商户负责人姓名 '),
(18, 'vin', 'vin', NULL, 'youfen车架号'),
(19, 'engineNo', 'engineNum', NULL, 'youfen发动机号'),
(20, 'licensePlateType', 'plateType', NULL, 'youfen号牌类型'),
(21, 'licensePlateNo', 'plateNum', NULL, 'youfen车牌号'),
(22, 'cycle', 'timePeriod', NULL, 'youfen时间段(1,3,6,9,12,24)单位:月'),
(23, 'type', 'type', NULL, 'youfen查询标签，多个标签以逗号分隔'),
(24, 'startTime', 'tradeStartTime', NULL, 'youfen开始时间，当查询S013时使用'),
(25, 'endTime', 'tradeEndTime', NULL, 'youfen截止时间，当查询S013时使用'),
(26, 'feature', 'feature', NULL, NULL),
(27, 'account', 'account', '123', NULL),
(28, 'name', 'merchantName', NULL, NULL),
(29, 'account', 'merchantAccount', NULL, NULL),
(30, 'merchantNo', 'registeredNum', NULL, NULL),
(31, 'docId', 'docId', NULL, NULL),
(32, 'bankcard', 'bankCard', NULL, NULL),
(33, 'beginDate', 'tradeStartTime', NULL, NULL),
(34, 'endDate', 'tradeEndTime', NULL, NULL),
(35, 'city', 'city', NULL, NULL),
(36, 'mobile', 'cellphone', NULL, NULL),
(37, 'address', 'address', NULL, NULL),
(38, 'certNo', 'idCard', NULL, NULL),
(39, 'certType', 'certType', 'IDENTITY_CARD', NULL),
(40, 'q', 'q', NULL, NULL),
(41, 'sign', 'sign', NULL, NULL),
(42, 'cardno', 'idCard', NULL, NULL),
(43, 'a', 'a', NULL, NULL),
(44, 'type', 'roleType', 'person', NULL),
(45, 'phone', 'cellphone', NULL, NULL),
(46, 'entInfo', 'uniformCreditCode', NULL, NULL),
(47, 'realname', 'name', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `api_search_log`
--

CREATE TABLE IF NOT EXISTS `api_search_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cache` bit(1) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  `parameters` varchar(1000) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `result` longtext,
  `api_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDXg8d2b1q7b6o4fxk0k44e2sjwe` (`parameters`(255)),
  KEY `FK6q683uc6w6egpiovb8mr590s9` (`api_id`),
  KEY `FKkifo8r32vlm6toibavju0qqes` (`customer_id`),
  KEY `FK845g7x8650w891o5isomc1vxa` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=30 ;

--
-- 转存表中的数据 `api_search_log`
--

INSERT INTO `api_search_log` (`id`, `cache`, `create_time`, `parameters`, `price`, `result`, `api_id`, `customer_id`, `user_id`) VALUES
(11, b'0', '2017-10-15 15:54:54', 'idcard=21010219790916471X', 2, '{"status":"0","msg":"ok","result":{"province":"辽宁","city":"沈阳","town":"和平区","area":"辽宁省 沈阳市 和平区","lastflag":"0","sex":"男","birth":"1979年09月16日"}}', 8034, 2, 1),
(12, b'0', '2017-10-15 15:54:54', 'mobile=15869001094', 10, '{"error_code":0,"reason":"Success","result":{"company":"中国移动","card":"中国移动 GSM","province":"浙江","city":"杭州","num":"1586900","citycode":"0571","areacode":"330100","provincecode":"330000","zip":"310000","prefix":"158"}}', 8001, 2, 1),
(13, b'0', '2017-10-15 15:54:55', 'cardno=21010219790916471X&name=李扬&type=person', 98, '{"msg":"没有失信数据","query":{"cardno":"21010219790916471X","name":"李扬"},"code":1,"data":[]}', 8028, 2, 1),
(14, b'0', '2017-10-15 15:54:55', 'idcard=21010219790916471X&name=李扬', 260, '{"resCode":"0000","resMsg":"提交成功","data":{"statusCode":"2007","statusMsg":"本数据库中未查得"}}', 8022, 2, 1),
(15, b'0', '2017-10-15 15:54:55', 'cellphone=15869001094&cycle=12', 280, '{"resCode":"0000","resMsg":"提交成功","data":{"statusCode":"2012","statusMsg":"查询成功","result":{"code":"200","cellphone":"15869001094","province":"浙江","city":"杭州","data":{"S002":{"cycle":"2016-10-15--2017-10-15","data":[{"platformType":"2","platformCode":"emay_100068","registerTime":"2017/2/10 0:00:00"},{"platformType":"2","platformCode":"emay_101812","registerTime":"2017/5/20 0:00:00"},{"platformType":"2","platformCode":"emay_103130","registerTime":"2017/3/22 0:00:00"},{"platformType":"1","platformCode":"emay_103333","registerTime":"2017/5/19 0:00:00"},{"platformType":"2","platformCode":"emay_103411 ","registerTime":"2017/4/30 0:00:00"}]},"S004":{"cycle":"2016-10-15--2017-10-15","data":[]},"S007":{"cycle":"2016-10-15--2017-10-15","data":[]},"S009":{"cycle":"2016-10-15--2017-10-15","data":[]},"S012":{"cycle":"2016-10-15--2017-10-15","data":[]},"S013":{"cycle":"2016-10-15--2017-10-15","data":[]}}}}}', 8006, 2, 1),
(16, b'1', '2017-10-15 16:37:05', 'idcard=21010219790916471X', 2, '{"status":"0","msg":"ok","result":{"province":"辽宁","city":"沈阳","town":"和平区","area":"辽宁省 沈阳市 和平区","lastflag":"0","sex":"男","birth":"1979年09月16日"}}', 8034, 2, 1),
(17, b'1', '2017-10-15 16:37:05', 'mobile=15869001094', 10, '{"error_code":0,"reason":"Success","result":{"company":"中国移动","card":"中国移动 GSM","province":"浙江","city":"杭州","num":"1586900","citycode":"0571","areacode":"330100","provincecode":"330000","zip":"310000","prefix":"158"}}', 8001, 2, 1),
(18, b'1', '2017-10-15 16:37:05', 'cardno=21010219790916471X&name=李扬&type=person', 98, '{"msg":"没有失信数据","query":{"cardno":"21010219790916471X","name":"李扬"},"code":1,"data":[]}', 8028, 2, 1),
(19, b'1', '2017-10-15 16:37:05', 'idcard=21010219790916471X&name=李扬', 260, '{"resCode":"0000","resMsg":"提交成功","data":{"statusCode":"2007","statusMsg":"本数据库中未查得"}}', 8022, 2, 1),
(20, b'1', '2017-10-15 16:37:05', 'cellphone=15869001094&cycle=12', 280, '{"resCode":"0000","resMsg":"提交成功","data":{"statusCode":"2012","statusMsg":"查询成功","result":{"code":"200","cellphone":"15869001094","province":"浙江","city":"杭州","data":{"S002":{"cycle":"2016-10-15--2017-10-15","data":[{"platformType":"2","platformCode":"emay_100068","registerTime":"2017/2/10 0:00:00"},{"platformType":"2","platformCode":"emay_101812","registerTime":"2017/5/20 0:00:00"},{"platformType":"2","platformCode":"emay_103130","registerTime":"2017/3/22 0:00:00"},{"platformType":"1","platformCode":"emay_103333","registerTime":"2017/5/19 0:00:00"},{"platformType":"2","platformCode":"emay_103411 ","registerTime":"2017/4/30 0:00:00"}]},"S004":{"cycle":"2016-10-15--2017-10-15","data":[]},"S007":{"cycle":"2016-10-15--2017-10-15","data":[]},"S009":{"cycle":"2016-10-15--2017-10-15","data":[]},"S012":{"cycle":"2016-10-15--2017-10-15","data":[]},"S013":{"cycle":"2016-10-15--2017-10-15","data":[]}}}}}', 8006, 2, 1),
(21, b'1', '2017-10-15 20:36:09', 'idcard=21010219790916471X', 2, '{"status":"0","msg":"ok","result":{"province":"辽宁","city":"沈阳","town":"和平区","area":"辽宁省 沈阳市 和平区","lastflag":"0","sex":"男","birth":"1979年09月16日"}}', 8034, 2, 1),
(22, b'1', '2017-10-15 20:36:09', 'mobile=15869001094', 10, '{"error_code":0,"reason":"Success","result":{"company":"中国移动","card":"中国移动 GSM","province":"浙江","city":"杭州","num":"1586900","citycode":"0571","areacode":"330100","provincecode":"330000","zip":"310000","prefix":"158"}}', 8001, 2, 1),
(23, b'1', '2017-10-15 20:36:09', 'cardno=21010219790916471X&name=李扬&type=person', 98, '{"msg":"没有失信数据","query":{"cardno":"21010219790916471X","name":"李扬"},"code":1,"data":[]}', 8028, 2, 1),
(24, b'1', '2017-10-15 20:36:09', 'idcard=21010219790916471X&name=李扬', 260, '{"resCode":"0000","resMsg":"提交成功","data":{"statusCode":"2007","statusMsg":"本数据库中未查得"}}', 8022, 2, 1),
(25, b'1', '2017-10-15 20:36:09', 'cellphone=15869001094&cycle=12', 280, '{"resCode":"0000","resMsg":"提交成功","data":{"statusCode":"2012","statusMsg":"查询成功","result":{"code":"200","cellphone":"15869001094","province":"浙江","city":"杭州","data":{"S002":{"cycle":"2016-10-15--2017-10-15","data":[{"platformType":"2","platformCode":"emay_100068","registerTime":"2017/2/10 0:00:00"},{"platformType":"2","platformCode":"emay_101812","registerTime":"2017/5/20 0:00:00"},{"platformType":"2","platformCode":"emay_103130","registerTime":"2017/3/22 0:00:00"},{"platformType":"1","platformCode":"emay_103333","registerTime":"2017/5/19 0:00:00"},{"platformType":"2","platformCode":"emay_103411 ","registerTime":"2017/4/30 0:00:00"}]},"S004":{"cycle":"2016-10-15--2017-10-15","data":[]},"S007":{"cycle":"2016-10-15--2017-10-15","data":[]},"S009":{"cycle":"2016-10-15--2017-10-15","data":[]},"S012":{"cycle":"2016-10-15--2017-10-15","data":[]},"S013":{"cycle":"2016-10-15--2017-10-15","data":[]}}}}}', 8006, 2, 1),
(26, b'0', '2017-10-16 01:36:46', 'cardno=532722197511040914&name=李尚钟&type=person', 98, '{"msg":"失信数据查询成功","query":{"cardno":"532722197511040914","name":"李尚钟"},"code":0,"data":[{"duty":"被告李尚钟于本判决生效后十日内偿还欠原告的借款208000元，利息33696元，合计241696元。","disrupt_type":"其它规避执行,违反财产报告制度","code":"(2010)宁执字第00099号","sex":"男","pub_time":"2013年10月11日","court":"宁洱哈尼族彝族自治县人民法院","name":"李尚钟","area":"云南","age":"38","business_entity":"","performance":"部分未履行","idcardno":"53272219751****0914"},{"duty":"由被告李尚钟支付原告李东华借款205300元，并支付违约金43770元，合计349070元。","disrupt_type":"违反财产报告制度,其他有履行能力而拒不履行生效法律文书确定义务","code":"(2011)宁执字第00079号","sex":"男","pub_time":"2013年10月11日","court":"宁洱哈尼族彝族自治县人民法院","name":"李尚钟","area":"云南","age":"38","business_entity":"","performance":"全部未履行","idcardno":"53272219751****0914"},{"duty":"被告李尚钟于本判决十天内偿还欠原告吴建华的借款70000元。诉讼费1550元由被告承担。","disrupt_type":"违反财产报告制度,违反限制高消费令,其他有履行能力而拒不履行生效法律文书确定义务","code":"(2010)宁执字第00065号","sex":"男","pub_time":"2016年09月08日","court":"宁洱哈尼族彝族自治县人民法院","name":"李尚钟","area":"云南","age":"41","business_entity":"","performance":"全部未履行","idcardno":"53272219751****0914"},{"duty":"（2016）云0821民初22号","disrupt_type":"其他有履行能力而拒不履行生效法律文书确定义务的","code":"(2016)云0821执140号","sex":"男","pub_time":"2016年09月20日","court":"宁洱哈尼族彝族自治县人民法院","name":"李尚钟","area":"云南","age":"40","business_entity":"","performance":"0","idcardno":"53272219751****0914"},{"duty":"（2016）云0821民初22号","disrupt_type":"其他有履行能力而拒不履行生效法律文书确定义务的","code":"(2016)云0821执140号","sex":"男","pub_time":"2016年09月20日","court":"宁洱哈尼族彝族自治县人民法院","name":"李尚钟","area":"云南","age":"40","business_entity":"暂无","performance":"全部未履行","idcardno":"53272219751****0914"}]}', 8028, 2, 1),
(27, b'0', '2017-10-16 01:38:20', 'cardno=330726196604270518&name=朱伯军&type=person', 98, '{"msg":"没有失信数据","query":{"cardno":"330726196604270518","name":"朱伯军"},"code":1,"data":[]}', 8028, 2, 1),
(28, b'0', '2017-10-16 01:39:57', 'idcard=330726196604270518&name=朱伯军', 260, '{"resCode":"0000","resMsg":"提交成功","data":{"statusCode":"2012","statusMsg":"查询成功","result":[{"crimeType":"比中前科","count":"1","caseType":"其他","caseSource":"前科","casePeriod":"5-10 年（不含）以内","caseLevel":"其他"}]}}', 8022, 2, 1),
(29, b'0', '2017-10-16 01:41:40', 'cellphone=13588677007&cycle=12', 280, '{"resCode":"0000","resMsg":"提交成功","data":{"statusCode":"2012","statusMsg":"查询成功","result":{"code":"200","cellphone":"13588677007","province":"浙江","city":"金华","data":{"S002":{"cycle":"2016-10-16--2017-10-16","data":[{"platformType":"2","platformCode":"emay_100607","registerTime":"2016/12/23 0:00:00"},{"platformType":"1","platformCode":"emay_103333","registerTime":"2016/12/2 0:00:00"},{"platformType":"2","platformCode":"emay_103352","registerTime":"2017/6/13 0:00:00"},{"platformType":"2","platformCode":"emay_100409","registerTime":"2017/4/17 0:00:00"},{"platformType":"2","platformCode":"emay_100029","registerTime":"2017/3/24 0:00:00"},{"platformType":"2","platformCode":"emay_103159","registerTime":"2016/12/9 0:00:00"},{"platformType":"2","platformCode":"emay_100160","registerTime":"2017/4/21 0:00:00"},{"platformType":"2","platformCode":"emay_102232","registerTime":"2017/5/14 0:00:00"},{"platformType":"2","platformCode":"emay_103035","registerTime":"2017/4/21 0:00:00"},{"platformType":"2","platformCode":"emay_102743","registerTime":"2017/4/10 0:00:00"},{"platformType":"2","platformCode":"emay_100666","registerTime":"2017/4/13 0:00:00"},{"platformType":"2","platformCode":"emay_103190","registerTime":"2017/3/28 0:00:00"},{"platformType":"2","platformCode":"emay_100703","registerTime":"2017/4/13 0:00:00"},{"platformType":"2","platformCode":"emay_102492","registerTime":"2017/3/22 0:00:00"},{"platformType":"2","platformCode":"emay_103202","registerTime":"2017/4/13 0:00:00"},{"platformType":"2","platformCode":"emay_102260","registerTime":"2017/4/12 0:00:00"},{"platformType":"2","platformCode":"emay_100994","registerTime":"2017/5/8 0:00:00"},{"platformType":"2","platformCode":"emay_103309","registerTime":"2017/4/21 0:00:00"},{"platformType":"2","platformCode":"emay_102704 ","registerTime":"2016/11/20 0:00:00"}]},"S004":{"cycle":"2016-10-16--2017-10-16","data":[{"platformType":"2","platformCode":"emay_102399","applicationTime":"2016/12/20 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102232","applicationTime":"2017/5/14 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102399","applicationTime":"2017/4/23 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102399","applicationTime":"2017/2/3 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102704","applicationTime":"2017/1/9 0:00:00","applicationAmount":"0.2w～0.5w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102399","applicationTime":"2017/3/19 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_103202","applicationTime":"2017/4/13 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102704","applicationTime":"2016/12/3 0:00:00","applicationAmount":"0.2w～0.5w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102399","applicationTime":"2017/4/1 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102704","applicationTime":"2016/11/20 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "}]},"S007":{"cycle":"2016-10-16--2017-10-16","data":[{"platformType":"2","platformCode":"emay_102399","loanLendersTime":"2017/4/18 0:00:00","loanLendersAmount":"0w～0.2w"},{"platformType":"2","platformCode":"emay_102704","loanLendersTime":"2016/12/20 0:00:00","loanLendersAmount":"0w～0.2w"},{"platformType":"2","platformCode":"emay_102399","loanLendersTime":"2017/3/5 0:00:00","loanLendersAmount":"0w～0.2w"},{"platformType":"2","platformCode":"emay_102232","loanLendersTime":"2017/6/13 0:00:00","loanLendersAmount":"0w～0.2w"},{"platformType":"2","platformCode":"emay_102399","loanLendersTime":"2017/5/23 0:00:00","loanLendersAmount":"0w～0.2w"},{"platformType":"2","platformCode":"emay_102399","loanLendersTime":"2017/1/19 0:00:00","loanLendersAmount":"0w～0.2w"},{"platformType":"2","platformCode":"emay_102704","loanLendersTime":"2017/2/8 0:00:00","loanLendersAmount":"0.2w～0.5w"},{"platformType":"2","platformCode":"emay_102704","loanLendersTime":"2017/1/2 0:00:00","loanLendersAmount":"0.2w～0.5w"},{"platformType":"2","platformCode":"emay_102399","loanLendersTime":"2017/5/1 0:00:00","loanLendersAmount":"0w～0.2w"}]},"S009":{"cycle":"2016-10-16--2017-10-16","data":[{"platformType":"2","platformCode":"emay_103202","rejectionTime":"2017/4/13 0:00:00"}]},"S012":{"cycle":"2016-10-16--2017-10-16","data":[{"platformCode":"emay_102704","counts":"2","money":"0w～0.2w"}]},"S013":{"cycle":"2016-10-16--2017-10-16","data":[]}}}}}', 8006, 2, 1);

-- --------------------------------------------------------

--
-- 表的结构 `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_code` varchar(255) DEFAULT NULL,
  `app_secret` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `remainder` int(11) DEFAULT NULL,
  `cellphone` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `customer`
--

INSERT INTO `customer` (`id`, `app_code`, `app_secret`, `name`, `remainder`, `cellphone`, `company_name`, `create_time`, `enabled`) VALUES
(1, 'code1', '@@@@@@@@@', 'admin', 224993304, NULL, NULL, NULL, b'0'),
(2, 'code2', '$$$$$$$$$$', '聂', 48025, NULL, '哈哈', '2017-09-28 17:16:19', b'1'),
(3, 'code3', '111111', '沈', 666666, NULL, NULL, '2017-09-28 17:16:00', b'1'),
(4, '&&&&&', NULL, '哈哈', 9999999, '13777490343', '嘻嘻', '2017-09-28 09:33:51', b'0');

-- --------------------------------------------------------

--
-- 表的结构 `person_credit_overview`
--

CREATE TABLE IF NOT EXISTS `person_credit_overview` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `age` int(11) DEFAULT NULL,
  `analyse_cellphone` longtext,
  `analyse_criminal` longtext,
  `analyse_dishonest_blacklist` longtext,
  `analyse_id_card` longtext,
  `analyse_multiple_head_lend` longtext,
  `area` varchar(255) DEFAULT NULL,
  `birth` varchar(255) DEFAULT NULL,
  `mobile_company` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `person_id` int(11) DEFAULT NULL,
  `analyse_antifraud` longtext,
  `status` varchar(255) DEFAULT NULL,
  `analyse_cellphone_log` longtext,
  `mojie_task` varchar(255) DEFAULT NULL,
  `analyse_zhima_score` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1f325xab8f1mot3nsp4qehxss` (`person_id`),
  KEY `mojie_task` (`mojie_task`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=64 ;

--
-- 转存表中的数据 `person_credit_overview`
--

INSERT INTO `person_credit_overview` (`id`, `age`, `analyse_cellphone`, `analyse_criminal`, `analyse_dishonest_blacklist`, `analyse_id_card`, `analyse_multiple_head_lend`, `area`, `birth`, `mobile_company`, `sex`, `person_id`, `analyse_antifraud`, `status`, `analyse_cellphone_log`, `mojie_task`, `analyse_zhima_score`) VALUES
(60, NULL, NULL, NULL, '{"status":0,"msg":"失信数据查询成功","color":"RED","result":[{"duty":"被告李尚钟于本判决生效后十日内偿还欠原告的借款208000元，利息33696元，合计241696元。","disrupt_type":"其它规避执行,违反财产报告制度","code":"(2010)宁执字第00099号","sex":"男","pub_time":"2013年10月11日","court":"宁洱哈尼族彝族自治县人民法院","name":"李尚钟","area":"云南","age":"38","business_entity":"","performance":"部分未履行","idcardno":"53272219751****0914"},{"duty":"由被告李尚钟支付原告李东华借款205300元，并支付违约金43770元，合计349070元。","disrupt_type":"违反财产报告制度,其他有履行能力而拒不履行生效法律文书确定义务","code":"(2011)宁执字第00079号","sex":"男","pub_time":"2013年10月11日","court":"宁洱哈尼族彝族自治县人民法院","name":"李尚钟","area":"云南","age":"38","business_entity":"","performance":"全部未履行","idcardno":"53272219751****0914"},{"duty":"被告李尚钟于本判决十天内偿还欠原告吴建华的借款70000元。诉讼费1550元由被告承担。","disrupt_type":"违反财产报告制度,违反限制高消费令,其他有履行能力而拒不履行生效法律文书确定义务","code":"(2010)宁执字第00065号","sex":"男","pub_time":"2016年09月08日","court":"宁洱哈尼族彝族自治县人民法院","name":"李尚钟","area":"云南","age":"41","business_entity":"","performance":"全部未履行","idcardno":"53272219751****0914"},{"duty":"（2016）云0821民初22号","disrupt_type":"其他有履行能力而拒不履行生效法律文书确定义务的","code":"(2016)云0821执140号","sex":"男","pub_time":"2016年09月20日","court":"宁洱哈尼族彝族自治县人民法院","name":"李尚钟","area":"云南","age":"40","business_entity":"","performance":"0","idcardno":"53272219751****0914"},{"duty":"（2016）云0821民初22号","disrupt_type":"其他有履行能力而拒不履行生效法律文书确定义务的","code":"(2016)云0821执140号","sex":"男","pub_time":"2016年09月20日","court":"宁洱哈尼族彝族自治县人民法院","name":"李尚钟","area":"云南","age":"40","business_entity":"暂无","performance":"全部未履行","idcardno":"53272219751****0914"}],"description":null}', NULL, NULL, NULL, NULL, NULL, NULL, 84, NULL, '处理中', NULL, NULL, NULL),
(62, NULL, NULL, '{"status":0,"msg":"查询成功","color":"RED","result":{"statusCode":"2012","statusMsg":"查询成功","result":[{"crimeType":"比中前科","count":"1","caseType":"其他","caseSource":"前科","casePeriod":"5-10 年（不含）以内","caseLevel":"其他"}]},"description":null}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 86, NULL, '处理中', NULL, NULL, NULL),
(63, NULL, NULL, NULL, NULL, NULL, '{"status":0,"msg":"查询成功","color":"YELLOW","result":{"statusCode":"2012","statusMsg":"查询成功","result":{"code":"200","cellphone":"13588677007","province":"浙江","city":"金华","data":{"S002":{"cycle":"2016-10-16--2017-10-16","data":[{"platformType":"2","platformCode":"emay_100607","registerTime":"2016/12/23 0:00:00"},{"platformType":"1","platformCode":"emay_103333","registerTime":"2016/12/2 0:00:00"},{"platformType":"2","platformCode":"emay_103352","registerTime":"2017/6/13 0:00:00"},{"platformType":"2","platformCode":"emay_100409","registerTime":"2017/4/17 0:00:00"},{"platformType":"2","platformCode":"emay_100029","registerTime":"2017/3/24 0:00:00"},{"platformType":"2","platformCode":"emay_103159","registerTime":"2016/12/9 0:00:00"},{"platformType":"2","platformCode":"emay_100160","registerTime":"2017/4/21 0:00:00"},{"platformType":"2","platformCode":"emay_102232","registerTime":"2017/5/14 0:00:00"},{"platformType":"2","platformCode":"emay_103035","registerTime":"2017/4/21 0:00:00"},{"platformType":"2","platformCode":"emay_102743","registerTime":"2017/4/10 0:00:00"},{"platformType":"2","platformCode":"emay_100666","registerTime":"2017/4/13 0:00:00"},{"platformType":"2","platformCode":"emay_103190","registerTime":"2017/3/28 0:00:00"},{"platformType":"2","platformCode":"emay_100703","registerTime":"2017/4/13 0:00:00"},{"platformType":"2","platformCode":"emay_102492","registerTime":"2017/3/22 0:00:00"},{"platformType":"2","platformCode":"emay_103202","registerTime":"2017/4/13 0:00:00"},{"platformType":"2","platformCode":"emay_102260","registerTime":"2017/4/12 0:00:00"},{"platformType":"2","platformCode":"emay_100994","registerTime":"2017/5/8 0:00:00"},{"platformType":"2","platformCode":"emay_103309","registerTime":"2017/4/21 0:00:00"},{"platformType":"2","platformCode":"emay_102704 ","registerTime":"2016/11/20 0:00:00"}]},"S004":{"cycle":"2016-10-16--2017-10-16","data":[{"platformType":"2","platformCode":"emay_102399","applicationTime":"2016/12/20 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102232","applicationTime":"2017/5/14 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102399","applicationTime":"2017/4/23 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102399","applicationTime":"2017/2/3 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102704","applicationTime":"2017/1/9 0:00:00","applicationAmount":"0.2w～0.5w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102399","applicationTime":"2017/3/19 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_103202","applicationTime":"2017/4/13 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102704","applicationTime":"2016/12/3 0:00:00","applicationAmount":"0.2w～0.5w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102399","applicationTime":"2017/4/1 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "},{"platformType":"2","platformCode":"emay_102704","applicationTime":"2016/11/20 0:00:00","applicationAmount":"0w～0.2w","applicationResult":" "}]},"S007":{"cycle":"2016-10-16--2017-10-16","data":[{"platformType":"2","platformCode":"emay_102399","loanLendersTime":"2017/4/18 0:00:00","loanLendersAmount":"0w～0.2w"},{"platformType":"2","platformCode":"emay_102704","loanLendersTime":"2016/12/20 0:00:00","loanLendersAmount":"0w～0.2w"},{"platformType":"2","platformCode":"emay_102399","loanLendersTime":"2017/3/5 0:00:00","loanLendersAmount":"0w～0.2w"},{"platformType":"2","platformCode":"emay_102232","loanLendersTime":"2017/6/13 0:00:00","loanLendersAmount":"0w～0.2w"},{"platformType":"2","platformCode":"emay_102399","loanLendersTime":"2017/5/23 0:00:00","loanLendersAmount":"0w～0.2w"},{"platformType":"2","platformCode":"emay_102399","loanLendersTime":"2017/1/19 0:00:00","loanLendersAmount":"0w～0.2w"},{"platformType":"2","platformCode":"emay_102704","loanLendersTime":"2017/2/8 0:00:00","loanLendersAmount":"0.2w～0.5w"},{"platformType":"2","platformCode":"emay_102704","loanLendersTime":"2017/1/2 0:00:00","loanLendersAmount":"0.2w～0.5w"},{"platformType":"2","platformCode":"emay_102399","loanLendersTime":"2017/5/1 0:00:00","loanLendersAmount":"0w～0.2w"}]},"S009":{"cycle":"2016-10-16--2017-10-16","data":[{"platformType":"2","platformCode":"emay_103202","rejectionTime":"2017/4/13 0:00:00"}]},"S012":{"cycle":"2016-10-16--2017-10-16","data":[{"platformCode":"emay_102704","counts":"2","money":"0w～0.2w"}]},"S013":{"cycle":"2016-10-16--2017-10-16","data":[]}}}},"description":{"网贷申请额度下限":12,"网贷申请额度上限":26,"网贷借款额度上限":24,"银行注册次数":1,"在多少网贷平台申请贷款":4,"网贷逾期次数":2,"逾期平台数":1,"网贷逾期额度下限":1,"网贷平台注册次数":18,"网贷借款额度下限":11,"网贷逾期额度上限":2,"放款平台数":3}}', NULL, NULL, NULL, NULL, 87, NULL, '处理中', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `person_credit_submit`
--

CREATE TABLE IF NOT EXISTS `person_credit_submit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_card` varchar(18) NOT NULL,
  `bank_card` varchar(255) NOT NULL,
  `car_card` varchar(255) DEFAULT NULL,
  `car_type` varchar(255) DEFAULT NULL,
  `common_address` varchar(255) NOT NULL,
  `linkman1mobile` varchar(255) NOT NULL,
  `linkman1name` varchar(4) NOT NULL,
  `linkman1relationship` varchar(255) DEFAULT NULL,
  `linkman2mobile` varchar(255) NOT NULL,
  `linkman2name` varchar(4) NOT NULL,
  `linkman2relationship` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) NOT NULL,
  `name` varchar(4) NOT NULL,
  `service_password` varchar(255) NOT NULL,
  `create_at` datetime DEFAULT NULL,
  `sms` varchar(255) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKektah6wyqy5xjp5bx7n944sse` (`customer_id`),
  KEY `FKre9ht5avu0lvfsbxut0gjn956` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=88 ;

--
-- 转存表中的数据 `person_credit_submit`
--

INSERT INTO `person_credit_submit` (`id`, `id_card`, `bank_card`, `car_card`, `car_type`, `common_address`, `linkman1mobile`, `linkman1name`, `linkman1relationship`, `linkman2mobile`, `linkman2name`, `linkman2relationship`, `mobile`, `name`, `service_password`, `create_at`, `sms`, `customer_id`, `user_id`) VALUES
(84, '532722197511040914', '6230910199035642863', NULL, NULL, '杭州', '13758130149', '杨为乾', '朋友', '13912345678', '测试的人', '父母', '15869001094', '李尚钟', '319804', '2017-10-16 01:36:45', NULL, 2, 1),
(86, '330726196604270518', '6230910199035642863', NULL, NULL, '杭州', '13758130149', '杨为乾', '朋友', '13912345678', '测试的人', '父母', '15869001094', '朱伯军', '319804', '2017-10-16 01:39:56', NULL, 2, 1),
(87, '330726196604270518', '6230910199035642863', NULL, NULL, '杭州', '13758130149', '杨为乾', '朋友', '13912345678', '测试的人', '父母', '13588677007', '朱伯军', '319804', '2017-10-16 01:41:39', NULL, 2, 1);

-- --------------------------------------------------------

--
-- 表的结构 `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER'),
(3, 'ROLE_MANAGER');

-- --------------------------------------------------------

--
-- 表的结构 `supplier`
--

CREATE TABLE IF NOT EXISTS `supplier` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_code` varchar(255) DEFAULT NULL,
  `app_secret` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `linkman` varchar(255) DEFAULT NULL,
  `linkman_mobile` varchar(255) DEFAULT NULL,
  `supply_name` varchar(255) DEFAULT NULL,
  `weburl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `supplier`
--

INSERT INTO `supplier` (`id`, `app_code`, `app_secret`, `code`, `linkman`, `linkman_mobile`, `supply_name`, `weburl`) VALUES
(1, '41022859e7f84583b81d1fc355130af5', NULL, 'aliyun', NULL, NULL, '阿里云', 'www.aliyun.com'),
(2, 'shangdao041', '$$$$$$$$$$', 'youfen', NULL, NULL, '优分', NULL),
(3, 'code3', '111111', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `supply_api`
--

CREATE TABLE IF NOT EXISTS `supply_api` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `effective_time` int(11) DEFAULT NULL,
  `host` varchar(255) DEFAULT NULL,
  `method` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `parameter_number` int(11) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `smart` bit(1) NOT NULL,
  `sort` int(11) DEFAULT NULL,
  `api_type` int(11) DEFAULT NULL,
  `root` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKe1b6enatjdmgc0n0sgwq3b7rn` (`supplier_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8039 ;

--
-- 转存表中的数据 `supply_api`
--

INSERT INTO `supply_api` (`id`, `description`, `effective_time`, `host`, `method`, `name`, `parameter_number`, `path`, `price`, `supplier_id`, `smart`, `sort`, `api_type`, `root`) VALUES
(8001, '手机号码归属地查询', 360000000, 'http://mobileas.market.alicloudapi.com', 'GET', 'ali手机号码归属地', 1, '/mobile', 10, 1, b'1', NULL, 1, 'personalReal.page({view_type:''phone_attribution''})'),
(8002, '手机号码状态查询', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen手机状态查询', 1, '/oreo/personal/mobile/netStatus', 114, 2, b'1', NULL, 1, 'personalReal.page({view_type:''phone_status''})'),
(8003, 'POS交易账动', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfenPOS交易账动', 7, '/oreo/merchant/midReport', 1740, 2, b'0', NULL, 7, 'enterpriseAssets.page({view_type:''business_POS''})'),
(8004, '车辆违章查询', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen车辆违章查询', 2, '/oreo/vehicle/violation/query', 60, 2, b'1', NULL, 3, 'personalAssets.page({view_type:''car_peccancy''})'),
(8005, '单商户银联流水画像', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen单商户银联流水画像', 1, '/oreo/merchant/midPortrait', 1000, 2, b'0', NULL, 7, 'enterpriseAssets.page({view_type:''business_flowing''})'),
(8006, '多头借贷全量核查', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen多头借贷全量核查', 1, '/oreo/personal/creditInfoAll', 280, 2, b'1', NULL, 2, 'personalCredit.page({view_type:''personal_whole''})'),
(8007, '多头借贷信息核查', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen多头借贷信息核查', 4, '/oreo/personal/creditInfo', 114, 2, b'1', NULL, 2, 'personalCredit.page({view_type:''personal_info''})'),
(8008, '二要素姓名身份证查询', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen二要素姓名身份证查询', 3, '/oreo/personal/validation2', 80, 2, b'1', NULL, 1, 'personalReal.page({view_type:''intellegence1''})'),
(8009, '二要素姓名手机号查询', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen二要素姓名手机号查询', 2, '/oreo/personal/validation2/nameAndCellphone', 220, 2, b'1', NULL, 1, 'personalReal.page({view_type:''intellegence2''})'),
(8010, '个人判决文书详情', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen个人判决文书详情', 1, '/oreo/courtJudgment/detail/query', 200, 2, b'1', NULL, 2, 'personalCredit.page({view_type:''sentence_detail''})'),
(8011, '个人对外投资查询', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen个人对外投资查询', 1, '/oreo/personal/investment', 1140, 2, b'0', NULL, 1, 'personalReal.page({view_type:''individual_investment''})'),
(8012, '个人法院判决简项', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen个人法院判决简项', 2, '/oreo/personal/courtJudgment/simple/query', 72, 2, b'1', NULL, 2, 'personalCredit.page({view_type:''sentence_simple''})'),
(8013, '个人法院失信简项', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen个人法院失信简项', 2, '/oreo/personal/courtDishonesty/simple/query', 86, 2, b'1', NULL, 2, 'personalCredit.page({view_type:''promise_simple''})'),
(8014, '个人银联账单真伪验证', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen个人银联账单真伪验证', 4, '/oreo/personal/bill/verification', 170, 2, b'1', NULL, 2, 'personalCredit.page({view_type:''personal_unionPay''})'),
(8015, '航旅信息统计查询', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen航旅信息统计查询', 2, '/oreo/personal/airTravel/query', 858, 2, b'0', NULL, 4, 'personalEconomics.page({view_type:''air_info''})'),
(8016, '企业法院失信简项', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen企业法院失信简项', 1, '/oreo/enterprise/courtDishonesty/simple/query', 86, 2, b'1', NULL, 6, 'enterpriseCredit.page({view_type:''business_simple''})'),
(8017, '企业法院判决简项', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen企业法院判决简项', 1, '/oreo/enterprise/courtJudgment/simple/query', 72, 2, b'1', NULL, 6, 'enterpriseCredit.page({view_type:''business_sentence''})'),
(8018, '商户账单真伪验证查询', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen商户账单真伪验证查询', 4, '/oreo/merchant/bill/verification', 170, 2, b'1', NULL, 6, 'enterpriseCredit.page({view_type:''business_authenticity''})'),
(8019, '手机号入网时长核查', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen手机号入网时长核查', 1, '/oreo/personal/mobile/netTimeLength', 128, 2, b'1', NULL, 1, 'personalReal.page({view_type:''phone_online''})'),
(8021, '肖像核查', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen肖像核查', 2, '/oreo/personal/portraitCheck', 114, 2, b'1', NULL, 1, 'personalReal.page({view_type:''man_verification''})'),
(8022, '刑事案底核查', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen刑事案底核查', 2, '/oreo/personal/crimeInfo', 260, 2, b'1', NULL, 2, 'personalCredit.page({view_type:''personal_criminal''})'),
(8023, '三要素姓名手机身份证查询', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen三要素姓名手机身份证查询', 4, '/oreo/personal/validation3', 186, 2, b'1', NULL, 1, 'personalReal.page({view_type:''intellegence3''})'),
(8024, '学历学籍信息查询', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen学历学籍信息查询', 2, '/oreo/personal/education/detail', 460, 2, b'1', NULL, 1, 'personalReal.page({view_type:''academic_info''})'),
(8025, '银联消费报告', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen银联消费报告', 4, '/oreo/personal/cardReport', 430, 2, b'1', NULL, 1, 'personalReal.page({view_type:''card_presentation''})'),
(8026, '借贷中介机构查询', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen借贷中介机构查询', 3, '/oreo/personal/loan/agencyInstitution/check', 100, 2, b'1', NULL, 2, 'personalCredit.page({view_type:''lending_intermediary''})'),
(8027, '综合风险验证', 360000000, 'https://api.acedata.com.cn:2443', 'GET', 'youfen综合风险验证', 3, '/oreo/personal/comprehensive/risk/check', 100, 2, b'1', NULL, 2, 'personalCredit.page({view_type:''comprehensive_risk''})'),
(8028, '失信黑名单', 360000000, 'http://blacklist.market.alicloudapi.com', 'GET', 'ali失信黑名单', 3, '/apixcredit/blacklist/dishonest', 98, 1, b'1', NULL, 2, 'personalCredit.page({view_type:''black_list''})'),
(8029, '银行卡四要素查询', 360000000, 'http://jisubank4.market.alicloudapi.com', 'GET', 'ali银行卡四要素查询', 4, '/bankcardverify4/verify', 250, 1, b'1', NULL, 1, 'personalReal.page({view_type:''card_query2''})'),
(8031, '银行卡三要素查询', 360000000, 'http://jisubank3.market.alicloudapi.com', 'GET', 'ali银行卡三要素查询', 3, '/bankcardverify3/verify', 250, 1, b'1', NULL, 1, 'personalReal.page({view_type:''card_query1''})'),
(8032, '企业工商信息查询', 360000000, 'http://jisuqygsxx.market.alicloudapi.com', 'GET', 'ali企业工商信息查询', NULL, '/enterprise/query', 300, 1, b'1', NULL, 5, 'enterpriseReal.page({view_type:''registration_info''})'),
(8034, '身份证分析', 360000000, 'http://jisuidcard.market.alicloudapi.com', 'GET', 'ali身份证分析', 2, '/idcard/query', 2, 1, b'1', NULL, NULL, NULL),
(8035, '欺诈信息验证', 360000000, 'https://dm-101.data.aliyun.com', 'POST', 'ali欺诈信息验证', 6, '/rest/161225/zmxy/api/zhima.credit.antifraud.verify.json', 3, 1, b'1', NULL, NULL, NULL),
(8036, '人行征信报告授权', 360000000, 'http://credit.market.alicloudapi.com', 'GET', 'ali人行征信报告授权', NULL, '/apixanalysis/pbccrc/grant/credit/pbc/page', 4, 1, b'0', NULL, NULL, NULL),
(8037, '法院涉诉综合查询', 360000000, 'http://xinshujud.market.alicloudapi.com', 'POST', 'ali法院数据综合查询_检索', 2, '/ws/court/query', 5, 1, b'0', NULL, NULL, NULL),
(8038, '贷款平台号码通', 360000000, 'http://phoneblack.market.alicloudapi.com', 'POST', 'ali贷款平台号码通', 2, '/ws/phone/phoneBlack', 6, 1, b'1', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `supply_api_parameter_couples`
--

CREATE TABLE IF NOT EXISTS `supply_api_parameter_couples` (
  `api_id` int(11) NOT NULL,
  `parameter_couple_id` int(11) NOT NULL,
  PRIMARY KEY (`api_id`,`parameter_couple_id`),
  KEY `FKq001p5urp2klixhhb98at3cc8` (`parameter_couple_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `supply_api_parameter_couples`
--

INSERT INTO `supply_api_parameter_couples` (`api_id`, `parameter_couple_id`) VALUES
(8003, 6),
(8008, 6),
(8009, 6),
(8012, 6),
(8013, 6),
(8014, 6),
(8015, 6),
(8021, 6),
(8022, 6),
(8023, 6),
(8024, 6),
(8025, 6),
(8026, 6),
(8027, 6),
(8028, 6),
(8035, 6),
(8003, 8),
(8008, 8),
(8011, 8),
(8012, 8),
(8013, 8),
(8015, 8),
(8021, 8),
(8022, 8),
(8023, 8),
(8024, 8),
(8025, 8),
(8026, 8),
(8027, 8),
(8029, 8),
(8031, 8),
(8034, 8),
(8002, 9),
(8003, 9),
(8006, 9),
(8007, 9),
(8009, 9),
(8019, 9),
(8023, 9),
(8025, 9),
(8026, 9),
(8027, 9),
(8003, 15),
(8018, 15),
(8003, 16),
(8003, 17),
(8004, 18),
(8004, 19),
(8004, 20),
(8004, 21),
(8006, 22),
(8007, 22),
(8007, 24),
(8007, 25),
(8008, 26),
(8023, 26),
(8018, 28),
(8003, 29),
(8005, 30),
(8010, 31),
(8014, 32),
(8025, 32),
(8029, 32),
(8031, 32),
(8035, 32),
(8014, 33),
(8018, 33),
(8014, 34),
(8018, 34),
(8034, 35),
(8001, 36),
(8029, 36),
(8035, 36),
(8035, 37),
(8035, 38),
(8035, 39),
(8037, 40),
(8037, 41),
(8038, 41),
(8028, 42),
(8028, 44),
(8038, 45),
(8016, 46),
(8017, 46),
(8029, 47),
(8031, 47);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `enabled` bit(1) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn82ha3ccdebhokx3a8fgdqeyy` (`role_id`),
  KEY `FKdptx0i3ky01svofwjytq5iry0` (`customer_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `enabled`, `password`, `username`, `role_id`, `customer_id`) VALUES
(1, b'1', 'liyang', 'liyang', 2, 2),
(2, b'1', 'nlj', 'nlj', 3, 2),
(3, b'1', 'shen', 'shen', 1, 1);

--
-- 限制导出的表
--

--
-- 限制表 `account_recharge_log`
--
ALTER TABLE `account_recharge_log`
  ADD CONSTRAINT `FK7j36mocswafhngv53p8lyyljk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKn9e5nt71wvybs8yv93rqbd2nk` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

--
-- 限制表 `api_search_log`
--
ALTER TABLE `api_search_log`
  ADD CONSTRAINT `FK6q683uc6w6egpiovb8mr590s9` FOREIGN KEY (`api_id`) REFERENCES `supply_api` (`id`),
  ADD CONSTRAINT `FK845g7x8650w891o5isomc1vxa` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKkifo8r32vlm6toibavju0qqes` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

--
-- 限制表 `person_credit_overview`
--
ALTER TABLE `person_credit_overview`
  ADD CONSTRAINT `FK1f325xab8f1mot3nsp4qehxss` FOREIGN KEY (`person_id`) REFERENCES `person_credit_submit` (`id`);

--
-- 限制表 `person_credit_submit`
--
ALTER TABLE `person_credit_submit`
  ADD CONSTRAINT `FKektah6wyqy5xjp5bx7n944sse` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  ADD CONSTRAINT `FKre9ht5avu0lvfsbxut0gjn956` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- 限制表 `supply_api`
--
ALTER TABLE `supply_api`
  ADD CONSTRAINT `FKe1b6enatjdmgc0n0sgwq3b7rn` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`);

--
-- 限制表 `supply_api_parameter_couples`
--
ALTER TABLE `supply_api_parameter_couples`
  ADD CONSTRAINT `FKq001p5urp2klixhhb98at3cc8` FOREIGN KEY (`parameter_couple_id`) REFERENCES `api_parameter_couple` (`id`),
  ADD CONSTRAINT `FKs5s7ww2hkufkbhtvyhhlcyt08` FOREIGN KEY (`api_id`) REFERENCES `supply_api` (`id`);

--
-- 限制表 `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FKdptx0i3ky01svofwjytq5iry0` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  ADD CONSTRAINT `FKn82ha3ccdebhokx3a8fgdqeyy` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
