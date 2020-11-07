﻿// JavaScript source code

import React from "react"
import { Flex,Box } from "@chakra-ui/core"
import Layout from "../components/layout"


const vitalikPage = () => (
    <Layout>
        <Flex flexDirection="row" pb={35}>
            <Box w="20%"></Box>
        <Box textAlign="center" w="60%">
            <h2>关于Vitalik Buterin（维塔利克·布特林）</h2>
            <p>
                Vitalik出生于俄罗斯，在加拿大长大，六岁时与父母住在一起，说俄语，英语和中文。他在瑞士楚格（Zug）生活了三年，并于2017年移居新加坡。他从滑铁卢大学退学，从事区块链项目。

Buterin在2011年对比特币产生了兴趣，并于同年成为《比特币杂志》杂志的联合创始人。2012年，比特币杂志开始以印刷出版物的形式出版，成为该主题上的第一本主要印刷出版物。他还在第一本经过同行评审的科学杂志《莱杰》中担任职务，该杂志致力于加密货币和相关主题。

在加入以太坊之前，他还从事与比特币有关的各种开源项目。

自2001年与父母移居加拿大以来，他于2016年5月首次来到俄罗斯。在访问期间，他会见了俄罗斯部长和俄罗斯联邦中央银行代表。

2017年，Vitalik Buterin荣登“财富”杂志评选的“ 40岁以下40位最有影响力的年轻人”的前10名，并入选《福布斯》杂志30岁以下600名最聪明的人，Vedomosti报纸承认他是该行业年度专业人士。
            </p>
            <br />
            <p>
                Vitalik是以太坊系统的创建者，该系统是一个基于智能合约的平台，用于创建基于区块链的去中心化在线服务。该网络于2015年7月下旬启动。

以太坊被实现为一个分散的虚拟机。以太坊作为一个开源平台，极大地简化了区块链技术的实施。以太坊技术允许在不依靠传统法律程序的情况下注册基于分布式合约基础（例如区块链）的任何资产的任何交易。相对于现有的交易注册系统，这种可能性具有竞争力。
            </p>
        </Box>
        <Box></Box>
        </Flex>
    </Layout>
)

export default vitalikPage