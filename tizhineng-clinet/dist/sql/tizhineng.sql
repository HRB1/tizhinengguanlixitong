/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : tizhineng

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-09-12 11:47:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for identity
-- ----------------------------
DROP TABLE IF EXISTS `identity`;
CREATE TABLE `identity` (
  `id` int(11) NOT NULL,
  `identityName` varchar(111) DEFAULT NULL COMMENT '权限名称',
  `isAble` tinyint(1) DEFAULT NULL COMMENT '是否存在该身份',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of identity
-- ----------------------------
INSERT INTO `identity` VALUES ('1', '主管', '1');
INSERT INTO `identity` VALUES ('2', '老师', '1');

-- ----------------------------
-- Table structure for identity_autho
-- ----------------------------
DROP TABLE IF EXISTS `identity_autho`;
CREATE TABLE `identity_autho` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identity_id` int(11) DEFAULT NULL,
  `authority` varchar(100) DEFAULT NULL,
  `isAble` tinyint(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of identity_autho
-- ----------------------------
INSERT INTO `identity_autho` VALUES ('1', '1', 'management', '1');
INSERT INTO `identity_autho` VALUES ('2', '1', 'checkWork', '1');
INSERT INTO `identity_autho` VALUES ('3', '1', 'plan', '1');
INSERT INTO `identity_autho` VALUES ('4', '1', 'customer', '1');
INSERT INTO `identity_autho` VALUES ('5', '1', 'college', '1');
INSERT INTO `identity_autho` VALUES ('6', '1', 'level', '1');
INSERT INTO `identity_autho` VALUES ('7', '1', 'assistant', '1');
INSERT INTO `identity_autho` VALUES ('8', '1', 'integral', '1');
INSERT INTO `identity_autho` VALUES ('9', '2', 'plan', '1');
INSERT INTO `identity_autho` VALUES ('10', '2', 'home', '1');
INSERT INTO `identity_autho` VALUES ('11', '1', 'home', '1');

-- ----------------------------
-- Table structure for kindergarener
-- ----------------------------
DROP TABLE IF EXISTS `kindergarener`;
CREATE TABLE `kindergarener` (
  `garenerName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `garenerId` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `className` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `classId` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `hourSubsidy` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kindergarener
-- ----------------------------
INSERT INTO `kindergarener` VALUES ('星星幼儿园', '10001', '大一班', '301', '20');
INSERT INTO `kindergarener` VALUES ('霞光托儿所', '10002', '中二班', '202', '15');
INSERT INTO `kindergarener` VALUES ('王府幼儿园', '10003', '小三班', '103', '30');

-- ----------------------------
-- Table structure for staff_list
-- ----------------------------
DROP TABLE IF EXISTS `staff_list`;
CREATE TABLE `staff_list` (
  `staffName` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `staffId` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `department` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `position` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `salary` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `tel` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `isQuit` varchar(6) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `quitReason` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `IDNum` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `entryTime` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `education` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `nativePlace` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `nation` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `isMarray` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `nativeType` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `classId` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `gartenId` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `classNum` varchar(5) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `headerId` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `id` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of staff_list
-- ----------------------------
INSERT INTO `staff_list` VALUES ('何智博', '', '1212', '11', '11', '111', '11', '11', '11', '11', '11', '11', '1', '1', '1', '1', '1', '1', '1', '1', '836humkt16');
INSERT INTO `staff_list` VALUES ('申丹丹', '', '12', '121', '121', '121', '1212', '1212', '1212', '1212', '1212', '12121', '1212', '1212', '121', '121', '1212', '1212', '1212', '121', '839114e0mm');
INSERT INTO `staff_list` VALUES ('何智博', '', '1212', '11', '11', '111', '11', '11', '11', '11', '11', '11', '1', '1', '1', '1', '1', '1', '1', '1', '8566wlt4pi');
INSERT INTO `staff_list` VALUES ('申丹丹', '', '12', '121', '121', '121', '1212', '1212', '1212', '1212', '1212', '12121', '1212', '1212', '121', '121', '1212', '1212', '1212', '121', '858pkhdmfk');
INSERT INTO `staff_list` VALUES ('何智博', '', '1212', '11', '11', '111', '11', '11', '11', '11', '11', '11', '1', '1', '1', '1', '1', '1', '1', '1', '854jkzs9ik');
INSERT INTO `staff_list` VALUES ('申丹丹', '', '12', '121', '121', '121', '1212', '1212', '1212', '1212', '1212', '12121', '1212', '1212', '121', '121', '1212', '1212', '1212', '121', '85728vdo1u');
INSERT INTO `staff_list` VALUES ('何智博', '', '1212', '11', '11', '111', '11', '11', '11', '11', '11', '11', '1', '1', '1', '1', '1', '1', '1', '1', '86po518hvu');
INSERT INTO `staff_list` VALUES ('申丹丹', '', '12', '121', '121', '121', '1212', '1212', '1212', '1212', '1212', '12121', '1212', '1212', '121', '121', '1212', '1212', '1212', '121', '86s6swu44m');
INSERT INTO `staff_list` VALUES ('何智博', '', '1212', '11', '11', '111', '11', '11', '11', '11', '11', '11', '1', '1', '1', '1', '1', '1', '1', '1', 'djcjghgod5');
INSERT INTO `staff_list` VALUES ('申丹丹', '', '12', '121', '121', '121', '1212', '1212', '1212', '1212', '1212', '12121', '1212', '1212', '121', '121', '1212', '1212', '1212', '121', 'djgz0ycadp');
INSERT INTO `staff_list` VALUES ('王霞', '1002', '财务部', '1', '26500', '17802472590', '0', '', '140524199708081219', '1567568406327', '本科', '山西', '汉', '0', '城市户口', '北京市海淀区翻斗花园1001室', '202', '10002', '150', '', '4fi3102m4w');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `userName` varchar(100) DEFAULT NULL COMMENT '用户名',
  `userPwd` varchar(100) DEFAULT NULL COMMENT '用户密码',
  `isAble` int(11) DEFAULT NULL COMMENT '用户是否存在',
  `identity` int(11) DEFAULT NULL COMMENT '用户权限',
  PRIMARY KEY (`userid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'admin', '1', '1');
INSERT INTO `user` VALUES ('2', 'yihang', 'yihang123', '1', '2');
