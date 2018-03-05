/**
 * Created by Administrator on 2017/8/10.
 *
 */

/**
 * Created by Administrator on 2017/8/10.
 *
 */

app.service("pdfprint", function () {

    return function (api_code,param,pdfname) {

        var html = "";

        switch(api_code){
            case 8001:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td colspan="2" class="tableBg">'+'核心经营指标'+'</td></tr>'+
                        '<tr><td class="widthF">'+'首次交易日期'+'</td><td class="widthF">'+param.indexCore.firstTransDate+'</td></tr>'+
                        '<tr><td>'+'有效交易POS终端台数'+'</td><td>'+param.indexCore.effectivePosNum+'</td></tr>'+
                        '<tr><td>'+'交易总金额'+'</td><td>'+param.indexCore.totalAmount+'</td></tr>'+
                        '<tr><td>'+'交易总卡数（原是总人数）'+'</td><td>'+param.indexCore.totalCardNum+'</td></tr>'+
                        '<tr><td>'+'交易总笔数'+'</td><td>'+param.indexCore.totalCount+'</td></tr>'+
                        '<tr><td>'+'月均交易天数'+'</td><td>'+param.indexCore.avgTransDay+'</td></tr>'+
                        '<tr><td>'+'笔单价'+'</td><td>'+param.indexCore.countPrice+'</td></tr>'+
                        '<tr><td>'+'客单价'+'</td><td>'+param.indexCore.cusPrice+'</td></tr>'+
                        '<tr><td>'+'近12月单月最大交易金额'+'</td><td>'+param.indexCore.transMaxAmount+'</td></tr>'+
                        '<tr><td>'+'近12月单月最小交易金额'+'</td><td>'+param.indexCore.transMinAmount+'</td></tr>'+
                        '<tr><td>'+'近12月法定节假日交易金额占比'+'</td><td>'+param.indexCore.holidayTransAmountPercent+'</td></tr>'+
                        '<tr><td>'+'近12月法定节假日交易笔数占比'+'</td><td>'+param.indexCore.holidayTransCountPercent+'</td></tr>'+
                        '<tr><td>'+'近12月卡均交易次数'+'</td><td>'+param.indexCore.avgCardTransCount+'</td></tr>'+
                        '<tr><td colspan="2" class="tableBg">'+'核心经营指标'+'</td></tr>'+
                        '<tr><td>'+'近24周低于周均交易额的周数'+'</td><td>'+param.indexStability.underAvgWeekAmountNum+'</td></tr>'+
                        '<tr><td>'+'三个月移动平均交易金额变异系数'+'</td><td>'+param.indexStability.transAmountCv+'</td></tr>'+
                        '<tr><td>'+'三个月移动平均交易卡数变异系数'+'</td><td>'+param.indexStability.transCardNumCv+'</td></tr>'+
                        '<tr><td>'+'三个月移动平均交易笔数变异系数'+'</td><td>'+param.indexStability.transCountCv+'</td></tr>';
                        html +='<tr><td colspan="2" class="tableBg">'+'异常经营指标'+'</td></tr>'+
                        '<tr><td>'+'反向交易总金额'+'</td><td>'+param.indexAbnormal.reverseTransTotalAmount+'</td></tr>'+
                        '<tr><td>'+'反向交易总笔数'+'</td><td>'+param.indexAbnormal.reverseTransTotalCount+'</td></tr>'+
                        '<tr><td>'+'近12月交易金额前五的客户的金额占比'+'</td><td>'+param.indexAbnormal.transAmountTop5Percent+'</td></tr>'+
                        '<tr><td>'+'近12月交易金额前五的客户的笔数占比'+'</td><td>'+param.indexAbnormal.transCountTop5Percent+'</td></tr>'+
                        '<tr><td>'+'贷记卡的交易总金额占比'+'</td><td>'+param.indexAbnormal.debitCardTotalAmountPercent+'</td></tr>'+
                        '<tr><td>'+'贷记卡的交易总笔数占比'+'</td><td>'+param.indexAbnormal.debitCardTotalCountPercent+'</td></tr>'+
                        '<tr><td>'+'非正常时间的交易总金额占比'+'</td><td>'+param.indexAbnormal.improperTransAmountPercent+'</td></tr>'+
                        '<tr><td>'+'非正常时间的交易总笔数占比'+'</td><td>'+param.indexAbnormal.improperTransCountPercent+'</td></tr>'+
                        '<tr><td>'+'同卡大额交易金额汇总'+'</td><td>'+param.indexAbnormal.cardLargeTotalAmount+'</td></tr>'+
                        '<tr><td>'+'同卡大额交易笔数汇总'+'</td><td>'+param.indexAbnormal.cardLargeTotalCount+'</td></tr>'+
                        '<tr><td>'+'非正常交易卡交易金额汇总'+'</td><td>'+param.indexAbnormal.improperTransTotalAmount+'</td></tr>'+
                        '<tr><td>'+'非正常交易卡交易笔数汇总'+'</td><td>'+param.indexAbnormal.improperTransTotalCount+'</td></tr>'+
                        '<tr><td>'+'交易失败总金额'+'</td><td>'+param.indexAbnormal.transFailedTotalAmount+'</td></tr>'+
                        '<tr><td>'+'交易失败总笔数'+'</td><td>'+param.indexAbnormal.transFailedTotalCount+'</td></tr>'+
                        '<tr><td colspan="2" class="tableBg">'+'疑似信用卡套现甄别'+'</td></tr>'+
                        '<tr><td>'+'套现金额'+'</td><td>'+param.cashOut.cashAmount+'</td></tr>'+
                        '<tr><td>'+'套现笔数'+'</td><td>'+param.cashOut.cashCount+'</td></tr>'+
                        '<tr><td>'+'套现金额占比'+'</td><td>'+param.cashOut.cashAmountPercent+'</td></tr>'+
                        '<tr><td>'+'套现笔数占比'+'</td><td>'+param.cashOut.cashCountPercent+'</td></tr>'+
                        '<tr><td>'+'信用卡、借记卡客单价比例'+'</td><td>'+param.cashOut.debitCreditCusPricePercent+'</td></tr>'
                        html +='<tr><td colspan="2" class="tableBg">'+'每月经营状况'+'</td></tr>'+
                        '<tr><td>'+'每月交易金额'+'</td><td>'+param.indexChange.transAmount+'</td></tr>'+
                        '<tr><td>'+'每月交易金额同比增长率'+'</td><td>'+param.indexChange.transAmountFellPercent+'</td></tr>'+
                        '<tr><td>'+'每月交易金额在本市同行业的排名'+'</td><td>'+param.indexChange.transAmountPeerRank+'</td></tr>'+
                        '<tr><td>'+'每月交易笔数'+'</td><td>'+param.indexChange.transCount+'</td></tr>'+
                        '<tr><td>'+'每月交易笔数同比增长率'+'</td><td>'+param.indexChange.transCountFellPercent+'</td></tr>'+
                        '<tr><td>'+'每月交易笔数在本市同行业的排名'+'</td><td>'+param.indexChange.transCountPeerRank+'</td></tr>'+
                        '<tr><td>'+'每月交易卡数'+'</td><td>'+param.indexChange.transCardNum+'</td></tr>'+
                        '<tr><td>'+'每月交易卡数在本市同行业的排名'+'</td><td>'+param.indexChange.transCardNumPeerRank+'</td></tr>'+
                        '<tr><td colspan="2" class="tableBg">'+'每周经营状况'+'</td></tr>'+
                        '<tr><td>'+'每周交易金额'+'</td><td>'+param.indexContrast.transAmount+'</td></tr>'+
                        '<tr><td>'+'每周交易笔数'+'</td><td>'+param.indexContrast.transCount+'</td></tr>'+
                        '<tr><td>'+'周交易额中值'+'</td><td>'+param.indexContrast.transMidAmount+'</td></tr>'+
                        '<tr><td>'+'周均交易金额'+'</td><td>'+param.indexContrast.transAvgAmount+'</td></tr>'+
                        '<tr><td colspan="2" class="tableBg">'+'客户忠诚度分析'+'</td></tr>'+
                        '<tr><td>'+'交易金额占比'+'</td><td>'+param.indexLoyalty.transAmountPercent+'</td></tr>'+
                        '<tr><td>'+'交易笔数占比'+'</td><td>'+param.indexLoyalty.transCountPercent+'</td></tr>'+
                        '<tr><td>'+'交易人数占比'+'</td><td>'+param.indexLoyalty.transCusNumPercent+'</td></tr>'+
                        '<tr><td colspan="2" class="tableBg">'+'客户地域分布'+'</td></tr>'+
                        '<tr><td>'+'交易金额占比'+'</td><td>'+param.indexArea.transAmountPercent+'</td></tr>'+
                        '<tr><td>'+'交易金额占比'+'</td><td>'+param.indexArea.transCountPercent+'</td></tr>'+
                        '<tr><td>'+'交易金额占比'+'</td><td>'+param.indexArea.transCusNumPercent+'</td></tr>'+
                        '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8002:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        angular.forEach(param,function (param,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td class="widthF">'+'违章时间'+'</td><td class="widthF">'+param.time+'</td></tr>'+
                                '<tr><td>'+'违章地点'+'</td><td>'+param.location+'</td></tr>'+
                                '<tr><td>'+'违法条款'+'</td><td>'+param.illegalEntry+'</td></tr>'+
                                '<tr><td>'+'违章代码'+'</td><td>'+param.code+'</td></tr>'+
                                '<tr><td>'+'违章扣分'+'</td><td>'+param.score+'</td></tr>'+
                                '<tr><td>'+'违章罚款金额'+'</td><td>'+param.count+'</td></tr>'+
                                '<tr><td>'+'是否处理（0：未处理 其他为已处理）'+'</td><td>'+param.handle+'</td></tr>'+
                                '<tr><td>'+'违章地点归属地'+'</td><td>'+param.locationName+'</td></tr>'
                        });
                    html += '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8003:
                if(param.status === '0'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr class="tableBg"><th class="width20">'+'查询项名称'+'</th><th class="width15">'+'时间范围'+'</th><th class="width25">'+'说明'+'</th><th class="width20">'+'查询结果'+'</th></tr>'+
                        '<tr><td class="S5266">'+'商户经营城市'+'</td><td>'+'近12月'+'</td><td>'+'商户经营城市（按消费人群来 源确定）'+'</td><td>'+param.S5266+'</td></tr>'+
                        '<tr><td class="S5132">'+'每月还贷能力估计'+'</td><td>'+'近12月'+'</td><td>'+'根据商户每月经营状况，评估 不同行业商户的还贷能力'+'</td><td>'+param.S5132+'</td></tr>'+
                        '<tr><td class="S5102">'+'商户编号（MID）'+'</td><td>'+'近12月'+'</td><td>'+'商户编号（MID）信息'+'</td><td>'+param.S5102+'</td></tr>'+
                        '<tr><td class="S5104">'+'对应类别：（例如批发类）'+'</td><td>'+'近12月'+'</td><td>商户对应类别信息'+'</td><td>'+param.S5104+'</td></tr>'+
                        '<tr><td class="S5105">'+'手续费率： %'+'</td><td>'+'近12月</td><td>'+'商户手续费率信息'+'</td><td>'+param.S5105+'</td></tr>'+
                        '<tr><td class="S5108">'+'收单机构'+'</td><td>'+'近24月'+'</td><td>'+'收单机构信息'+'</td><td>'+param.S5108+'</td></tr>'+
                        '<tr><td class="S5246">'+'终端台数（如POS机数量）'+'</td><td>'+'近12月'+'</td><td>'+'近1年，商户使用过的POS机'+'</td><td>'+param.S5246+'</td></tr>'+
                        '<tr><td class="S5247">'+'近1年，商户使用的POS机信 息枚举'+'</td><td>'+'近12月'+'</td><td>'+'商户名称_商户地址_商户类型_ 商户所在城市'+'</td><td>'+param.S5247+'</td></tr>'+
                        '<tr><td class="S5196">'+'2011年1月1日起，首次交易日 期'+'</td><td>'+'2011年1月1日起'+'</td><td>'+'全量4.5年流水中的，第一笔交 易的日期'+'</td><td>'+param.S5196+'</td></tr>'+
                        '<tr><td class="S5197">'+'2011年1月1日起，有交易月份 枚举'+'</td><td>'+'2011年1月1日起'+'</td><td>'+'2011年1月1至今日，有交易月 份枚举'+'</td><td>'+param.S5197+'</td></tr>'+
                        '<tr><td class="S5198">'+'截至上月，连续有交易的月份 数量'+'</td><td>'+'2011年1月1日起'+'</td><td>'+'截至上月的连续消费月数。比 如现在7月份，4月、５月有交 易流水，但6月没有交易流水，有效交易月份数为0'+'</td><td>'+param.S5198+'</td></tr>'+
                        '<tr><td class="S5200">'+'最近一日交易金额'+'</td><td>'+'2011年1月1日起'+'</td><td>'+'最近一日交易金额'+'</td><td>'+param.S5200+'</td></tr>'+
                        '<tr><td class="S5201">'+'最近一日交易笔数'+'</td><td>'+'2011年1月1日起'+'</td><td>'+'最近一日交易笔数'+'</td><td>'+param.S5201+'</td></tr>'+
                        '<tr><td class="S5202">'+'最近一日交易人数'+'</td><td>'+'2011年1月1日起'+'</td><td>'+'最近一日交易人数'+'</td><td>'+param.S5202+'</td></tr>'+
                        '<tr><td class="S5199">'+'最近一日交易日期'+'</td><td>'+'2011年1月1日起'+'</td><td>'+'最近一日交易日期'+'</td><td>'+param.S5199+'</td></tr>'+
                        '<tr><td class="S5203">'+'累计交易总金额'+'</td><td>'+'2011年1月1日起'+'</td><td>'+'全量4.5年流水中的累计交易金额'+'</td><td>'+param.S5203+'</td></tr>'+
                        '<tr><td class="S5204">'+'累计交易总笔数'+'</td><td>'+'2011年1月1日起'+'</td><td>'+'全量4.5年流水中的累计交易笔数'+'</td><td>'+param.S5204+'</td></tr>'+
                        '<tr><td class="S5205">'+'累计交易总人数'+'</td><td>'+'2011年1月1日起'+'</td><td>'+'全量4.5年流水中的累计交易人数'+'</td><td>'+param.S5205+'</td></tr>'+
                        '<tr><td class="S5000">'+'近12月，每月交易总金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'近12月，每月交易总金额枚举'+'</td><td>'+param.S5000+'</td></tr>'+
                        '<tr><td class="S5109">'+'近24月，每月交易总金额枚举'+'</td><td>'+'近24月'+'</td><td>'+'近24月，每月交易金额枚举'+'</td><td>'+param.S5109+'</td></tr>';
                     html += '<tr><td class="S5001">'+'近12月，每月交易总金额枚举（大于10元）'+'</td><td>'+'近12月'+'</td><td>去除单笔10元以下交易后，每 月交易金额枚举'+'</td><td>'+param.S5001+'</td></tr>'+
                        '<tr><td class="S5110">'+'近24月，每月交易总金额枚举（大于10元）'+'</td><td>'+'近24月'+'</td><td>去除单笔10元以下交易后，每 月交易金额枚举'+'</td><td>'+param.S5110+'</td></tr>'+
                        '<tr><td class="S5081">'+'近12月，每月最大交易金额'+'</td><td>'+'近12月'+'</td><td>'+'每月最大交易金额'+'</td><td>'+param.S5081+'</td></tr>'+
                        '<tr><td class="S5111">'+'近24月，每月最大交易金额'+'</td><td>'+'近24月'+'</td><td>'+'每月最大交易金额'+'</td><td>'+param.S5111+'</td></tr>'+
                        '<tr><td class="S5112">'+'每月最小交易金额'+'</td><td>'+'近24月'+'</td><td>'+'每月最小交易金额'+'</td><td>'+param.S5112+'</td></tr>'+
                        '<tr><td class="S5113">'+'每月交易总笔数枚举'+'</td><td>'+'近24月'+'</td><td>'+'每月交易笔数枚举'+'</td><td>'+param.S5113+'</td></tr>'+
                        '<tr><td class="S5003">'+'每月交易总笔数枚举（大于10 元）'+'</td><td>'+'近12月'+'</td><td>'+'去除单笔10元以下交易后，每 月交易笔数枚举'+'</td><td>'+param.S5003+'</td></tr>'+
                        '<tr><td class="S5004">'+'近12月，每月交易总天数枚举'+'</td><td>'+'近12月'+'</td><td>'+'去每月交易天数枚举'+'</td><td>'+param.S5004+'</td></tr>'+
                        '<tr><td class="S5114">'+'近24月，每月交易总天数枚举'+'</td><td>'+'近24月'+'</td><td>'+'每月交易天数枚举'+'</td><td>'+param.S5114+'</td></tr>'+
                        '<tr><td class="S5115">'+'每月交易总人数枚举'+'</td><td>'+'近24月'+'</td><td>'+'每月交易人数枚举'+'</td><td>'+param.S5115+'</td></tr>'+
                        '<tr><td class="S5011">'+'每月交易总人数枚举（大于10 元）'+'</td><td>'+'近12月'+'</td><td>'+'去除单笔10元以下交易后，每 月交易人数枚举'+'</td><td>'+param.S5011+'</td></tr>'+
                        '<tr><td class="S5116">'+'每月客单价枚举'+'</td><td>'+'近24月'+'</td><td>'+'每月客单价枚举'+'</td><td>'+param.S5116+'</td></tr>'+
                        '<tr><td class="S5117">'+'每月笔单价枚举'+'</td><td>'+'近24月'+'</td><td>'+'每月笔单价枚举'+'</td><td>'+param.S5117+'</td></tr>'+
                        '<tr><td class="S5006">'+'每月笔单价枚举（大于10元）'+'</td><td>'+'近12月'+'</td><td>'+'去除单笔10元以下交易后，每 月笔单价枚举'+'</td><td>'+param.S5006+'</td></tr>'+
                        '<tr><td class="S5165">'+'每周交易总金额枚举'+'</td><td>'+'近24周'+'</td><td>'+'每周交易总金额枚举'+'</td><td>'+param.S5165+'</td></tr>'+
                        '<tr><td class="S5166">'+'每周交易总笔数枚举'+'</td><td>'+'近24周'+'</td><td>'+'每周交易总笔数枚举'+'</td><td>'+param.S5166+'</td></tr>'+
                        '<tr><td class="S5167">'+'每周交易总天数枚举'+'</td><td>'+'近24周'+'</td><td>'+'每周交易总天数枚举'+'</td><td>'+param.S5167+'</td></tr>'+
                        '<tr><td class="S5168">'+'每周交易总人数枚举'+'</td><td>'+'近24周'+'</td><td>'+'每周交易总人数枚举'+'</td><td>'+param.S5168+'</td></tr>'+
                        '<tr><td class="S5169">'+'周均交易金额'+'</td><td>'+'近24周'+'</td><td>'+'周均交易金额'+'</td><td>'+param.S5169+'</td></tr>'+
                        '<tr><td class="S5170">'+'周均交易笔数'+'</td><td>'+'近24周'+'</td><td>'+'周均交易笔数'+'</td><td>'+param.S5170+'</td></tr>';
                    html += '<tr><td class="S5171">'+'周均交易天数'+'</td><td>'+'近24周'+'</td><td>'+'周均交易天数'+'</td><td>resultMsg.S5171</td></tr>'+
                        '<tr><td class="S5172">'+'周交易金额中值'+'</td><td>'+'近24周'+'</td><td>'+'周交易金额中值'+'</td><td>'+param.S5172+'</td></tr>'+
                        '<tr><td class="S5173">'+'周交易金额最高值'+'</td><td>'+'近24周'+'</td><td>'+'周交易金额最高值'+'</td><td>'+param.S5173+'</td></tr>'+
                        '<tr><td class="S5174">'+'周交易金额最低值'+'</td><td>'+'近24周'+'</td><td>'+'周交易金额最低值'+'</td><td>'+param.S5174+'</td></tr>'+
                        '<tr><td class="S5175">'+'低于周均交易金额的周数'+'</td><td>'+'近24周'+'</td><td>'+'低于周均交易金额的周数'+'</td><td>'+param.S5175+'</td></tr>'+
                        '<tr><td class="S5176">'+'低于周均交易金额的月份分布'+'</td><td>'+'近24周'+'</td><td>'+'低于周均交易金额的月份分布'+'</td><td>'+param.S5176+'</td></tr>'+
                        '<tr><td class="S5177">'+'周交易金额变异系数'+'</td><td>'+'近24周'+'</td><td>'+'周交易金额变异系数'+'</td><td>'+param.S5177+'</td></tr>'+
                        '<tr><td class="S5178">'+'周交易笔数变异系数'+'</td><td>'+'近24周'+'</td><td>'+'周交易笔数变异系数'+'</td><td>'+param.S5178+'</td></tr>'+
                        '<tr><td class="S5206">'+'每小时交易金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'统计近12月每个小时的交易总金额'+'</td><td>'+param.S5206+'</td></tr>'+
                        '<tr><td class="S5207">'+'每小时交易笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'统计近12月每个小时的交易总笔数'+'</td><td>'+param.S5207+'</td></tr>'+
                        '<tr><td class="S5210">'+'每月工作日工作时间交易总金额'+'</td><td>'+'近12月'+'</td><td>'+'周一~周五 09:30-11:30,14:00-16:30 交易金额'+'</td><td>'+param.S5210+'</td></tr>'+
                        '<tr><td class="S5212">'+'每月工作日非工作时间交易总金额'+'</td><td>'+'近12月'+'</td><td>'+'周一~周五09:30- 11:30,14:00-16:30之外的交易金额'+'</td><td>'+param.S5212+'</td></tr>'+
                        '<tr><td class="S5211">'+'每月工作日工作时间交易总笔数'+'</td><td>'+'近12月'+'</td><td>'+'周一~周五 09:30-11:30,14:00-16:30 交易笔数'+'</td><td>'+param.S5211+'</td></tr>'+
                        '<tr><td class="S5213">'+'每月工作日非工作时间交易总笔数'+'</td><td>'+'近12月'+'</td><td>'+'周一~周五09:30-11:30,14:00-16:30之外的交易笔数'+'</td><td>'+param.S5213+'</td></tr>'+
                        '<tr><td class="S5214">'+'每月双休日交易总金额'+'</td><td>'+'近12月'+'</td><td>'+'周六、周日全时段消费金额'+'</td><td>'+param.S5214+'</td></tr>'+
                        '<tr><td class="S5215">'+'每月双休日交易总笔数'+'</td><td>'+'近12月'+'</td><td>'+'周六、周日全时段消费笔数'+'</td><td>'+param.S5215+'</td></tr>'+
                        '<tr><td class="S5076">'+'近6月，各月四区间交易总人数'+'</td><td>'+'近6月'+'</td><td>'+'统计如下各区间的交易人数 0：（8am-14pm]、1： (14pm-17pm]、2：(17pm- 22pm]、3：(22pm-8am]'+'</td><td>'+param.S5076+'</td></tr>'+
                        '<tr><td class="S5077">'+'近6月，各月四区间最大单笔交易金额'+'</td><td>'+'近6月'+'</td><td>'+'统计如下各区间最大单笔金额 0：（8am-14pm]、1： (14pm-17pm]、2：(17pm- 22pm]、3：(22pm-8am]'+'</td><td>'+param.S5077+'</td></tr>'+
                        '<tr><td class="S5078">'+'近6月，各月四区间最小单笔交易金额'+'</td><td>'+'近6月'+'</td><td>'+'统计如下各区间最小单笔金额 0：（8am-14pm]、1： (14pm-17pm]、2：(17pm- 22pm]、3：(22pm-8am]'+'</td><td>'+param.S5078+'</td></tr>'+
                        '<tr><td class="S5129">'+'近6月月均交易金额'+'</td><td>'+'近6月'+'</td><td>'+'近6月的平均月交易金额'+'</td><td>'+param.S5129+'</td></tr>';
                     html+='<tr><td class="S5046">'+'近6月金额标准差'+'</td><td>近6月</td><td>近6月金额标准差</td><td>resultMsg.S5046</td></tr>'+
                        '<tr><td class="S5047">'+'近6月金额标准差在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'近6月金额标准差在本市同行排名'+'</td><td>'+param.S5047+'</td></tr>'+
                        '<tr><td class="S5048">'+'近6月金额差异系数'+'</td><td>'+'近6月'+'</td><td>'+'近6月金额差异系数'+'</td><td>'+param.S5048+'</td></tr>'+
                        '<tr><td class="S5049">'+'近6月金额差异系数在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'近6月金额差异系数在本市同行排名'+'</td><td>'+param.S5049+'</td></tr>'+
                        '<tr><td class="S5118">'+'近12月交易金额环比增长枚举'+'</td><td>'+'近13月'+'</td><td>'+'近12月交易金额环比增长'+'</td><td>'+param.S5118+'</td></tr>'+
                        '<tr><td class="S5070">'+'标准差-交易额环比增长率'+'</td><td>'+'近6月'+'</td><td>'+'近6月交易金额环比增长率的标准差'+'</td><td>'+param.S5070+'</td></tr>'+
                        '<tr><td class="S5071">'+'标准差-交易额环比增长率在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'近6月交易金额环比增长率的标准差在本市同行排名'+'</td><td>'+param.S5071+'</td></tr>'+
                        '<tr><td class="S5072">'+'差异系数－交易额环比增长率'+'</td><td>'+'近6月'+'</td><td>'+'近6月交易金额环比增长率的差异系数'+'</td><td>'+param.S5072+'</td></tr>'+
                        '<tr><td class="S5073">'+'差异系数-交易额环比增长率在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'近6月交易金额环比增长率的 差异系数在本市同行排名'+'</td><td>'+param.S5073+'</td></tr>'+
                        '<tr><td class="S5010">'+'每月交易金额环比增长枚举（10元以上）'+'</td><td>'+'近13月'+'</td><td>'+'去除单笔10元以下交易后，每月交易金额环比增长率'+'</td><td>'+param.S5010+'</td></tr>'+
                        '<tr><td class="S5068">'+'每月交易额环比增长率均值（10元以上）'+'</td><td>'+'近6月'+'</td><td>'+'去除单笔10元以下交易后，每月交易金额环比增长率均值'+'</td><td>'+param.S5068+'</td></tr>'+
                        '<tr><td class="S5126">'+'年度交易额峰值月份'+'</td><td>'+'近12月'+'</td><td>'+'每月交易金额高于近12月月均交易金额的月份明细'+'</td><td>'+param.S5126+'</td></tr>'+
                        '<tr><td class="S5130">'+'近6月月均交易笔数'+'</td><td>'+'近6月'+'</td><td>'+'近6月月均交易笔数'+'</td><td>'+param.S5130+'</td></tr>'+
                        '<tr><td class="S5052">'+'近6月交易笔数标准差'+'</td><td>'+'近6月'+'</td><td>'+'近6月交易笔数标准差'+'</td><td>'+param.S5052+'</td></tr>'+
                        '<tr><td class="S5053">'+'近6月交易笔数标准差在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'近6月交易笔数标准差在本市同行排名'+'</td><td>'+param.S5053+'</td></tr>'+
                        '<tr><td class="S5054">'+'近6月交易笔数差异系数'+'</td><td>'+'近6月'+'</td><td>'+'近6月交易笔数差异系数'+'</td><td>'+param.S5054+'</td></tr>'+
                        '<tr><td class="S5055">'+'近6月交易笔数差异系数在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'近6月交易笔数差异系数在本市同行排名'+'</td><td>'+param.S5055+'</td></tr>'+
                        '<tr><td class="S5119">'+'近12月交易笔数环比增长枚举'+'</td><td>'+'近13月'+'</td><td>'+'近12月交易笔数环比增长'+'</td><td>'+param.S5119+'</td></tr>'+
                        '<tr><td class="S5120">'+'近12月客单价环比增长枚举'+'</td><td>'+'近13月'+'</td><td>'+'近12月客单价环比增长'+'</td><td>'+param.S5120+'</td></tr>'+
                        '<tr><td class="S5121">'+'近12月笔单价环比增长枚举'+'</td><td>'+'近13月'+'</td><td>'+'近12月笔单价环比增长'+'</td><td>'+param.S5121+'</td></tr>';
                     html+='<tr><td class="S5122">'+'每月交易金额同比增长枚举'+'</td><td>'+'近12月'+'</td><td>'+'每月交易金额与去年同期月份 增长率'+'</td><td>'+param.S5122+'</td></tr>'+
                        '<tr><td class="S5123">'+'每月交易金额同比增长率均值'+'</td><td>'+'近12月'+'</td><td>'+'每月交易金额同比增长率均值'+'</td><td>'+param.S5123+'</td></tr>'+
                        '<tr><td class="S5142">'+'每月交易金额同比增长率均值在本市同行排名'+'</td><td>'+'近12月'+'</td><td>'+'每月交易金额同比增长率均值在本市同行排名，输出： 1、本市同行1/4值、1/2、3/4 值、行业均值 2、本商户在本市排名'+'</td><td>'+param.S5142+'</td></tr>'+
                        '<tr><td class="S5064">'+'标准差-交易额同比增长率'+'</td><td>'+'近6月'+'</td><td>'+'标准差-交易额同比增长率'+'</td><td>'+param.S5064+'</td></tr>'+
                        '<tr><td class="S5065">'+'标准差-交易额同比增长率在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'标准差-交易额同比增长率在本市同行排名'+'</td><td>'+param.S5065+'</td></tr>'+
                        '<tr><td class="S5066">'+'差异系数－交易额同比增长率'+'</td><td>'+'近6月'+'</td><td>'+'差异系数－交易额同比增长率'+'</td><td>'+param.S5066+'</td></tr>'+
                        '<tr><td class="S5067">'+'差异系数-交易金额同比增长率在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'差异系数-交易金额同比增长率在本市同行排名'+'</td><td>'+param.S5067+'</td></tr>'+
                        '<tr><td class="S5009">'+'每月交易额同比增长枚举（10 元以上）'+'</td><td>'+'近12月'+'</td><td>'+'去除单笔10元以下交易后，每月交易金额同比增长值'+'</td><td>'+param.S5009+'</td></tr>'+
                        '<tr><td class="S5062">'+'每月交易额同比增长均值（10 元以上）'+'</td><td>'+'近6月'+'</td><td>'+'去除单笔10元以下交易后，每月交易金额同比增长值均值'+'</td><td>'+param.S5062+'</td></tr>'+
                        '<tr><td class="S5063">'+'每月交易额同比增长率均值在本市同行排名（10元以上）'+'</td><td>'+'近6月'+'</td><td>'+'去除单笔10元以下交易后，每月交易金额同比增长值均值在本市同行排名'+'</td><td>'+param.S5063+'</td></tr>'+
                        '<tr><td class="S5124">'+'每月交易笔数同比增长枚举</td><td>'+'近12月'+'</td><td>'+'近12月，每月交易笔数相对于去年同期月份的增长率'+'</td><td>'+param.S5124+'</td></tr>'+
                        '<tr><td class="S5125">'+'每月客单价同比增长枚举</td><td>'+'近12月'+'</td><td>'+'近12月，每月客单价相对于去年同期月份的增长率'+'</td><td>'+param.S5125+'</td></tr>'+
                        '<tr><td class="S5127">'+'近6月月均交易天数</td><td>'+'近6月'+'</td><td>'+'近6月，平均每月交易天数'+'</td><td>'+param.S5127+'</td></tr>'+
                        '<tr><td class="S5057">'+'月均交易天数在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'月均交易天数在本市同行排名'+'</td><td>'+param.S5057+'</td></tr>'+
                        '<tr><td class="S5131">'+'近6月交易天数变异系数'+'</td><td>'+'近6月'+'</td><td>'+'近6月交易天数变异系数'+'</td><td>'+param.S5131+'</td></tr>'+
                        '<tr><td class="S5139">'+'月交易天数变异系数在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'月均交易天数变异系数在本市同行排名'+'</td><td>'+param.S5139+'</td></tr>'+
                        '<tr><td class="S5058">'+'近6月天数标准差'+'</td><td>'+'近6月'+'</td><td>'+'近6月天数标准差'+'</td><td>'+param.S5058+'</td></tr>'+
                        '<tr><td class="S5059">'+'近6月天数标准差本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'近6月天数标准差本市同行排名'+'</td><td>'+param.S5059+'</td></tr>'+
                        '<tr><td class="S5060">'+'近6月天数差异系数'+'</td><td>'+'近6月'+'</td><td>'+'近6月天数差异系数'+'</td><td>'+param.S5060+'</td></tr>'+
                        '<tr><td class="S5061">'+'近6月天数差异系数在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'近6月天数差异系数在本市同行排名'+'</td><td>'+param.S5061+'</td></tr>';
                     html+='<tr><td class="S5128">'+'近6月月均交易人数'+'</td><td>'+'近6月'+'</td><td>'+'近6月，平均每月交易人数'+'</td><td>'+param.S5128+'</td></tr>'+
                        '<tr><td class="S5133">'+'每月交易金额在本市同行排名'+'</td><td>'+'近24月'+'</td><td>'+'每月交易金额在本市同行排'+'</td><td>'+param.S5133+'</td></tr>'+
                        '<tr><td class="S5134">'+'每月交易笔数在本市同行排名'+'</td><td>'+'近24月'+'</td><td>'+'每月交易笔数在本市同行排名'+'</td><td>'+param.S5134+'</td></tr>'+
                        '<tr><td class="S5137">'+'月均交易金额在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'月均交易金额在本市同行排名'+'</td><td>'+param.S5137+'</td></tr>'+
                        '<tr><td class="S5138">'+'月均交易笔数在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'月均交易笔数在本市同行排名'+'</td><td>'+param.S5138+'</td></tr>'+
                        '<tr><td class="S5135">'+'客单价在本市同行排名'+'</td><td>'+'近24月'+'</td><td>'+'客单价在本市同行排名'+'</td><td>'+param.S5135+'</td></tr>'+
                        '<tr><td class="S5136">'+'笔单价在本市同行排名'+'</td><td>'+'近24月'+'</td><td>'+'笔单价在本市同行排名'+'</td><td>'+param.S5136+'</td></tr>'+
                        '<tr><td class="S5143">'+'同行每月交易额环比增长'+'</td><td>'+'近13月'+'</td><td>'+'同行每月交易额环比增长'+'</td><td>'+param.S5143+'</td></tr>'+
                        '<tr><td class="S5069">'+'近6月交易额环比增长率在本市同行排名'+'</td><td>'+'近6月'+'</td><td>'+'近6月交易额环比增长率在本市同行排名'+'</td><td>'+param.S5069+'</td></tr>'+
                        '<tr><td class="S5144">'+'同行每月客单价环比增长'+'</td><td>'+'近13月'+'</td><td>'+'同行每月客单价环比增长'+'</td><td>'+param.S5144+'</td></tr>'+
                        '<tr><td class="S5145">'+'同行每月交易笔数环比增长'+'</td><td>'+'近13月'+'</td><td>'+'同行每月交易笔数环比增长'+'</td><td>'+param.S5145+'</td></tr>'+
                        '<tr><td class="S5146">'+'同行每月交易金额同比增长'+'</td><td>'+'近13月'+'</td><td>'+'同行每月交易金额同比增长'+'</td><td>'+param.S5146+'</td></tr>'+
                        '<tr><td class="S5147">'+'同行每月交易笔数同比增长'+'</td><td>'+'近13月'+'</td><td>'+'同行每月交易笔数同比增长'+'</td><td>'+param.S5147+'</td></tr>'+
                        '<tr><td class="S5148">'+'同行每月客单价同比增长'+'</td><td>'+'近13月'+'</td><td>'+'同行每月客单价同比增长'+'</td><td>'+param.S5148+'</td></tr>'+
                        '<tr><td class="S5181">'+'周均交易金额在本市同行排名'+'</td><td>'+'近24周'+'</td><td>'+'近24周周均交易金额在本市同行排名'+'</td><td>'+param.S5181+'</td></tr>'+
                        '<tr><td class="S5182">'+'周均交易笔数在本市同行排名'+'</td><td>'+'近13月'+'</td><td>'+'近24周周均交易笔数在本市同行排名'+'</td><td>'+param.S5182+'</td></tr>'+
                        '<tr><td class="S5183">'+'周均交易天数在本市同行排名'+'</td><td>'+'近13月'+'</td><td>'+'近24周周均交易天数在本市同行排名'+'</td><td>'+param.S5183+'</td></tr>'+
                        '<tr><td class="S5184">'+'周交易笔数变异系数在本市同行排名'+'</td><td>'+'近13月'+'</td><td>'+'近24周周交易笔数变异系数在本市同行排名'+'</td><td>'+param.S5184+'</td></tr>'+
                        '<tr><td class="S5185">'+'周交易金额变异系数在本市同行排名'+'</td><td>'+'近13月'+'</td><td>'+'近24周周交易金额变异系数在本市同行排名'+'</td><td>'+param.S5185+'</td></tr>'+
                        '<tr><td class="S5140">'+'市场份额'+'</td><td>'+'近13月'+'</td><td>'+'根据商户交易额、行业交易额，商户数量计算商户的市场份额。'+'</td><td>'+param.S5140+'</td></tr>';
                     html+='<tr><td class="S5141">'+'市场增长率'+'</td><td>'+'近6月'+'</td><td>'+'根据商户、行业交易额，统计 商户市场增长率'+'</td><td>'+param.S5141+'</td></tr>'+
                    '<tr><td class="S5257">'+'各忠诚度客户交易金额占比（普通、中等、忠实）'+'</td><td>'+'近12月'+'</td><td>'+'近12月，普通客户（消费1 笔）、中等客户（２-4笔）、 VIP客户（5笔及以上）的客户 交易金额占比分布'+'</td><td>'+param.S5257+'</td></tr>'+
                    '<tr><td class="S5258">'+'各忠诚度客户交易笔数占比（普通、中等、忠实）'+'</td><td>'+'近12月'+'</td><td>'+'近12月，普通客户（消费1 笔）、中等客户（２-4笔）、 VIP客户（5笔及以上）的客户 交易笔数占比分布'+'</td><td>'+param.S5258+'</td></tr>'+
                    '<tr><td class="S5259">'+'各忠诚度客户交易人数占比（普通、中等、忠实）'+'</td><td>'+'近12月'+'</td><td>'+'近12月，普通客户（消费1 笔）、中等客户（２-4笔）、 VIP客户（5笔及以上）的客户 交易人数占比分布'+'</td><td>'+param.S5259+'</td></tr>'+
                    '<tr><td class="S5260">'+'普卡客户人数占比'+'</td><td>'+'近12月'+'</td><td>'+'统计商户下、不同卡等级的客户分布'+'</td><td>'+param.S5260+'</td></tr>'+
                    '<tr><td class="S5261">'+'银卡及金卡客户人数占比'+'</td><td>'+'近12月'+'</td><td>'+'根统计商户下、不同卡等级的客户分布'+'</td><td>'+param.S5261+'</td></tr>'+
                    '<tr><td class="S5262">'+'白金卡及以上等级客户人数占比'+'</td><td>'+'近12月'+'</td><td>'+'统计商户下、不同卡等级的客户分布'+'</td><td>'+param.S5262+'</td></tr>'+
                    '<tr><td class="S5254">'+'各地客户交易金额占比（同省同城、同省非同城、外省、其他）'+'</td><td>'+'近12月'+'</td><td>'+'统计商户下各地域客户的消费 金额分布'+'</td><td>'+param.S5254+'</td></tr>'+
                    '<tr><td class="S5255">'+'地客户交易笔数占比（同省同城、同省非同城、外省、其他）'+'</td><td>'+'近12月'+'</td><td>'+'根据商户交易额、行业交易额，商户数量计算商户的市场份额。'+'</td><td>'+param.S5255+'</td></tr>'+
                    '<tr><td class="S5256">'+'地客户交易人数占比（同省同城、同省非同城、外省、其他）'+'</td><td>'+'近12月'+'</td><td>'+'根据商户交易额、行业交易额，商户数量计算商户的市场份额。'+'</td><td>'+param.S5256+'</td></tr>'+
                    '<tr><td class="S5265">'+'前5大异地城市客户分布'+'</td><td>'+'近12月'+'</td><td>'+'根据商户交易额、行业交易额，商户数量计算商户的市场份额。'+'</td><td>'+param.S5265+'</td></tr>'+
                    '<tr><td class="S5216">'+'近12月，每月单笔(0,200]:交 易总金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总金额'+'</td><td>'+param.S5216+'</td></tr>'+
                    '<tr><td class="S5217">'+'近12月，单笔(0,200]:交易总 笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总笔数'+'</td><td>'+param.S5217+'</td></tr>'+
                    '<tr><td class="S5218">'+'近12月，单笔(0,200]:交易总 人数枚'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总人数'+'</td><td>'+param.S5218+'</td></tr>'+
                    '<tr><td class="S5219">'+'近12月，单笔(200,600]:交易 总金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总金额'+'</td><td>'+param.S5219+'</td></tr>'+
                    '<tr><td class="S5220">'+'近12月，单笔(200,600]:交易 总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总笔数'+'</td><td>'+param.S5220+'</td></tr>'+
                    '<tr><td class="S5221">'+'近12月，单笔(200,600]:交易 总人数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总人数'+'</td><td>'+param.S5221+'</td></tr>'+
                    '<tr><td class="S5222">'+'近12月，单笔(600,1000]:交易 总金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总金额'+'</td><td>'+param.S5222+'</td></tr>'+
                    '<tr><td class="S5223">'+'近12月，单笔(600,1000]:交易 总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总笔数'+'</td><td>'+param.S5223+'</td></tr>'+
                    '<tr><td class="S5224">'+'近12月，单笔(600,1000]:交易 总人数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总人数'+'</td><td>'+param.S5224+'</td></tr>';
                     html+='<tr><td class="S5225">'+'近12月，单笔(1000,5000]:交 易总金额枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间交易总金额'+'</td><td>'+param.S5225+'</td></tr>'+
                    '<tr><td class="S5226">'+'近12月，单笔(1000,5000]:交 易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总笔数'+'</td><td>'+param.S5226+'</td></tr>'+
                    '<tr><td class="S5227">'+'近12月，单笔(1000,5000]:交 易总人数枚举'+'</td><td>v近12月'+'</td><td>'+'各金额区间交易总人数'+'</td><td>'+param.S5227+'</td></tr>'+
                    '<tr><td class="S5228">'+'近12月，单笔(5000,20000]:交易总金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总金额'+'</td><td>'+param.S5228+'</td></tr>'+
                    '<tr><td class="S5229">'+'近12月，单笔(5000,20000]:交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总笔数'+'</td><td>'+param.S5229+'</td></tr>'+
                    '<tr><td class="S5230">'+'近12月，单笔(5000,20000]:交易总人数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总人数'+'</td><td>'+param.S5230+'</td></tr>'+
                    '<tr><td class="S5231">'+'近12月，单笔(20000,+]:交易 总金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总金额'+'</td><td>'+param.S5231+'</td></tr>'+
                    '<tr><td class="S5232">'+'近12月，单笔(20000,+]:交易 总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总笔数'+'</td><td>'+param.S5232+'</td></tr>'+
                    '<tr><td class="S5233">'+'近12月，单笔(20000,+]:交易 总人数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间交易总人数'+'</td><td>'+param.S5233+'</td></tr>'+
                    '<tr><td class="S5234">'+'近6月，单笔(0,200]:借记卡交 易总笔数枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5234+'</td></tr>'+
                    '<tr><td class="S5235">'+'近6月，单笔(200,600]:借记卡 交易总笔数枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5235+'</td></tr>'+
                    '<tr><td class="S5236">'+'近6月，单笔(600,1000]:借记 卡交易总笔数枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5236+'</td></tr>'+
                    '<tr><td class="S5237">'+'近6月，单笔(1000,5000]:借记 卡交易总笔数枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5237+'</td></tr>'+
                    '<tr><td class="S5238">'+'近6月，单笔(5000,20000]:借 记卡交易总笔数枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5238+'</td></tr>'+
                    '<tr><td class="S5239">'+'近6月，单笔(20000,+]:借记卡 交易总笔数枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5239+'</td></tr>'+
                    '<tr><td class="S5086">'+'近12月，单笔（0，10]:借记卡 交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5086+'</td></tr>'+
                    '<tr><td class="S5087">'+'近12月，单笔（10，500]:借 记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5087+'</td></tr>'+
                    '<tr><td class="S5088">'+'近12月，单笔（500，1000]: 借记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5088+'</td></tr>'+
                    '<tr><td class="S5089">'+'近12月，单笔（1000，2000]: 借记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5089+'</td></tr>'+
                    '<tr><td class="S5090">'+'近12月，单笔（2000，5000]: 借记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5090+'</td></tr>';
                     html+='<tr><td class="S5091">'+'近12月，单笔（5000， 10000]:借记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5091+'</td></tr>'+
                    '<tr><td class="S5092">'+'近12月，单笔（10000，+]:借 记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，借记卡的交易笔数'+'</td><td>'+param.S5092+'</td></tr>'+
                    '<tr><td class="S5240">'+'近6月，单笔(0,200]:贷记卡交 易总笔数枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数'+'</td><td>'+param.S5240+'</td></tr>'+
                    '<tr><td class="S5241">'+'近6月，单笔(200,600]:贷记卡 交易总笔数枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数'+'</td><td>'+param.S5241+'</td></tr>'+
                    '<tr><td class="S5242">'+'近6月，单笔(600,1000]:贷记 卡交易总笔数枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数'+'</td><td>'+param.S5242+'</td></tr>'+
                    '<tr><td class="S5243">'+'近6月，单笔(1000,5000]:贷记 卡交易总笔数枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数v</td><td>'+param.S5243+'</td></tr>'+
                    '<tr><td class="S5244">'+'近6月，单笔(5000,20000]:贷 记卡交易总笔数枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数'+'</td><td>'+param.S5244+'</td></tr>'+
                    '<tr><td class="S5245">'+'近6月，单笔(20000,+]:贷记卡 交易总笔数枚举'+'</td><td>'+'近6月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数'+'</td><td>'+param.S5245+'</td></tr>'+
                    '<tr><td class="S5093">'+'近12月，单笔（0，10]:贷记卡 交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数'+'</td><td>'+param.S5093+'</td></tr>'+
                    '<tr><td class="S5094">'+'近12月，单笔（10，500]:贷 记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数'+'</td><td>'+param.S5094+'</td></tr>'+
                    '<tr><td class="S5095">'+'近12月，单笔（500，1000]: 贷记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数'+'</td><td>'+param.S5095+'</td></tr>'+
                    '<tr><td class="S5096">'+'近12月，单笔（1000，2000]: 贷记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数'+'</td><td>'+param.S5096+'</td></tr>'+
                    '<tr><td class="S5097">'+'近12月，单笔（2000,5000]: 贷记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数'+'</td><td>'+param.S5097+'</td></tr>'+
                    '<tr><td class="S5098">'+'近12月，单笔（5000， 10000]:贷记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数'+'</td><td>'+param.S5098+'</td></tr>'+
                    '<tr><td class="S5099">'+'近12月，单笔（10000，+]:贷 记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'各金额区间下，贷记卡的交易笔数'+'</td><td>'+param.S5099+'</td></tr>'+
                    '<tr><td class="S5282">'+'每月出账交易总金额枚举'+'</td><td>'+'近24月'+'</td><td>'+'商户支出交易枚举（如：撤销、退货等）'+'</td><td>'+param.S5282+'</td></tr>'+
                    '<tr><td class="S5284">'+'近6月出账交易总金额'+'</td><td>'+'近6月'+'</td><td>'+'商户支出交易总计（如：撤销、退货等）'+'</td><td>'+param.S5284+'</td></tr>'+
                    '<tr><td class="S5283">'+'每月出账交易总笔数枚举'+'</td><td>'+'近24月'+'</td><td>'+'商户支出交易枚举（如：撤销、退货等）'+'</td><td>'+param.S5283+'</td></tr>'+
                    '<tr><td class="S5285">'+'近6月出账交易总笔数'+'</td><td>'+'近6月'+'</td><td>'+'商户支出交易总计（如：撤销、退货等）'+'</td><td>'+param.S5285+'</td></tr>'+
                    '<tr><td class="S5263">'+'交易金额前五的客户的金额占比'+'</td><td>'+'近12月'+'</td><td>'+'交易金额排名前五的客户，其交易总金额占商户总金额的比'+'</td><td>'+param.S5263+'</td></tr>';
                     html+='<tr><td class="S5264">'+'交易金额前五的客户的笔数占比'+'</td><td>'+'近12月'+'</td><td>'+'交易金额排名前五的客户'+'</td><td>'+param.S5264+'</td></tr>'+
                    '<tr><td class="S5179">'+'近1周交易金额TOP10客户，各客户交易总金额枚举'+'</td><td>'+'近1周'+'</td><td>'+'交易金额TOP10客户，各客户金额枚举'+'</td><td>'+param.S5179+'</td></tr>'+
                    '<tr><td class="S5186">'+'近1月交易金额TOP10客户，各客户交易总金额枚举'+'</td><td>'+'近1月'+'</td><td>'+'交易金额TOP10客户，各客户 金额枚举'+'</td><td>'+param.S5186+'</td></tr>'+
                    '<tr><td class="S5187">'+'近3月交易金额TOP10客户，各客户交易总金额枚举'+'</td><td>'+'近3月'+'</td><td>'+'交易金额TOP10客户，各客户 金额枚举'+'</td><td>'+param.S5187+'</td></tr>'+
                    '<tr><td class="S5188">'+'近6月交易金额TOP10客户，各客户交易总金额枚举'+'</td><td>'+'近6月'+'</td><td>'+'交易金额TOP10客户，各客户 金额枚举'+'</td><td>'+param.S5188+'</td></tr>'+
                    '<tr><td class="S5189">'+'近12月交易金额TOP10客户，各客户交易总金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'交易金额TOP10客户，各客户 金额枚举'+'</td><td>'+param.S5189+'</td></tr>'+
                    '<tr><td class="S5190">'+'近2年交易金额TOP10客户，各客户交易总金额枚举'+'</td><td>'+'近24月'+'</td><td>'+'交易金额TOP10客户，各客户 金额枚举'+'</td><td>'+param.S5190+'</td></tr>'+
                    '<tr><td class="S5180">'+'近1周交易整数金额的次数'+'</td><td>'+'近1周'+'</td><td>'+'近1周交易整数金额的次数'+'</td><td>'+param.S5180+'</td></tr>'+
                    '<tr><td class="S5191">'+'近1月交易整数金额的次数'+'</td><td>'+'近1月'+'</td><td>'+'近1月交易整数金额的次数'+'</td><td>'+param.S5191+'</td></tr>'+
                    '<tr><td class="S5192">'+'近3月交易整数金额的次数'+'</td><td>'+'近3月'+'</td><td>'+'近3月交易整数金额的次数'+'</td><td>'+param.S5192+'</td></tr>'+
                    '<tr><td class="S5193">'+'近6月交易整数金额的次数'+'</td><td>'+'近6月'+'</td><td>'+'近6月交易整数金额的次数'+'</td><td>'+param.S5193+'</td></tr>'+
                    '<tr><td class="S5194">'+'近12月交易整数金额的次数'+'</td><td>'+'近12月'+'</td><td>'+'近12月交易整数金额的次数'+'</td><td>'+param.S5194+'</td></tr>'+
                    '<tr><td class="S5195">'+'近两年交易整数金额的次数'+'</td><td>'+'近24月'+'</td><td>'+'近两年交易整数金额的次数'+'</td><td>'+param.S5195+'</td></tr>'+
                    '<tr><td class="S5079">'+'近12月，非正常大额（单笔金 额大于本市同行排名前10%）交易金额'+'</td><td>'+'近12月'+'</td><td>'+'同地区同行业单笔交易额的排 名10%金额为临界值，单笔大 于该临界值的交易金额总和'+'</td><td>'+param.S5079+'</td></tr>'+
                    '<tr><td class="S5080">'+'近12月，非正常大额（单笔金 额大于本市同行排名前10%）交易笔数'+'</td><td>'+'近12月'+'</td><td>'+'同地区同行业单笔交易额的排 名10%金额为临界值，单笔大 于该临界值的交易笔数总和'+'</td><td>'+param.S5080+'</td></tr>'+
                    '<tr><td class="S5155">'+'近1月单日同卡多笔等额消费金额'+'</td><td>'+'近1月'+'</td><td>'+'去除单笔10元以下交易后，统 计近1月，单日交易3笔以上的 卡等额消费金额'+'</td><td>'+param.S5155+'</td></tr>'+
                    '<tr><td class="S5156">'+'近6月单日同卡多笔等额消费金额'+'</td><td>'+'近6月'+'</td><td>'+'去除单笔10元以下交易后，统 计近6月，单日交易3笔以上的 卡等额消费金额'+'</td><td>'+param.S5156+'</td></tr>'+
                    '<tr><td class="S5157">'+'近12月单日同卡多笔等额消费金额'+'</td><td>'+'近12月'+'</td><td>'+'去除单笔10元以下交易后，统 计近12月，单日交易3笔以上 的卡等额消费金额'+'</td><td>'+param.S5157+'</td></tr>'+
                    '<tr><td class="S5158">'+'近1月单日同卡多笔等额消费笔数'+'</td><td>'+'近1月'+'</td><td>'+'去除单笔10元以下交易后，统 计近1月，单日交易3笔以上的 卡等额消费笔数'+'</td><td>'+param.S5158+'</td></tr>'+
                    '<tr><td class="S5159">'+'近6月单日同卡多笔等额消费笔数'+'</td><td>'+'近6月'+'</td><td>'+'去除单笔10元以下交易后，统 计近6月，单日交易3笔以上的 卡等额消费笔数'+'</td><td>'+param.S5159+'</td></tr>';
                     html+='<tr><td class="S5160">'+'近12月单日同卡多笔等额消费笔数'+'</td><td>'+'近12月'+'</td><td>'+'去除单笔10元以下交易后，统计近12月，单日交易3笔以上的卡等额消费笔数'+'</td><td>'+param.S5160+'</td></tr>'+
                    '<tr><td class="S5161">'+'近12月单月同卡大额交易金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'统计当月消费5笔以上的卡，单笔交易金额大于等于5000元的交易笔数'+'</td><td>'+param.S5161+'</td></tr>'+
                    '<tr><td class="S5162">'+'近12月单月同卡大额交易笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'统计当月消费5笔以上的卡，单笔交易金额大于等于5000元的交易笔数'+'</td><td>'+param.S5162+'</td></tr>'+
                    '<tr><td class="S5163">'+'近12月单月非同卡大额交易金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'统计当月消费5笔以下的卡，单笔交易金额大于等于5000元的交易总额'+'</td><td>'+param.S5163+'</td></tr>'+
                    '<tr><td class="S5164">'+'近12月单月非同卡大额交易笔数枚举</td><td>'+'近12月'+'</td><td>'+'统计当月消费5笔以下的卡，单笔交易金额大于等于5000元的交易笔数'+'</td><td>'+param.S5164+'</td></tr>'+
                    '<tr><td class="S5149">'+'近1月单日同卡多笔消费次数'+'</td><td>'+'近1月'+'</td><td>'+'去除单笔10元以下交易后，统计近1月，单日交易3笔以上的卡，其消费总笔数'+'</td><td>'+param.S5149+'</td></tr>'+
                    '<tr><td class="S5150">'+'近6月单日同商户多笔消费次数'+'</td><td>'+'近6月'+'</td><td>去除单笔10元以下交易后，统计近6月，单日交易3笔以上的卡，其消费总笔数'+'</td><td>'+param.S5150+'</td></tr>'+
                    '<tr><td class="S5151">'+'近12月单日同商户多笔消费次数'+'</td><td>'+'近12月'+'</td><td>'+'去除单笔10元以下交易后，统计近12月，单日交易3笔以上的卡，其消费总笔数'+'</td><td>'+param.S5151+'</td></tr>'+
                    '<tr><td class="S5152">'+'近1月同商户多笔消费最小时间间隔'+'</td><td>'+'近1月'+'</td><td>'+'去除单笔10元以下交易后，该商户下同一张卡刷卡两次以上的最小时间间隔'+'</td><td>'+param.S5152+'</td></tr>'+
                    '<tr><td class="S5153">'+'近6月同商户多笔消费最小时间间隔'+'</td><td>'+'近6月'+'</td><td>'+'去除单笔10元以下交易后，该商户下同一张卡刷卡两次以上的最小时间间隔'+'</td><td>'+param.S5153+'</td></tr>'+
                    '<tr><td class="S5154">'+'近12月同商户多笔消费最小时间间隔'+'</td><td>'+'近12月'+'</td><td>'+'去除单笔10元以下交易后，该商户下同一张卡刷卡两次以上的最小时间间隔'+'</td><td>'+param.S5154+'</td></tr>'+
                    '<tr><td class="S5148">'+'每月交易失败总金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'每月交易失败总金额枚举'+'</td><td>'+param.S5148+'</td></tr>'+
                    '<tr><td class="S5149">'+'每月交易失败总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'每月交易失败总笔数枚举'+'</td><td>'+param.S5149+'</td></tr>'+
                    '<tr><td class="S5150">'+'每月交易失败原因枚举'+'</td><td>'+'近12月'+'</td><td>'+'每月失败交易原因，以及该原因对应的金额枚举'+'</td><td>'+param.S5150+'</td></tr>'+
                    '<tr><td class="S5151">'+'近12月，交易失败总金额'+'</td><td>'+'近12月'+'</td><td>'+'失败交易总金额'+'</td><td>'+param.S5151+'</td></tr>'+
                    '<tr><td class="S5152">'+'近12月，交易失败总笔数'+'</td><td>'+'近12月'+'</td><td>'+'失败交易总笔数'+'</td><td>'+param.S5152+'</td></tr>'+
                    '<tr><td class="S5169">'+'每月贷记卡交易总金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'在该商户消费过的贷记卡金额枚举'+'</td><td>'+param.S5169+'</td></tr>'+
                    '<tr><td class="S5170">'+'每月贷记卡交易总笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'在该商户消费过的贷记卡笔数枚举'+'</td><td>'+param.S5170+'</td></tr>'+
                    '<tr><td class="S5007">'+'每月贷记卡笔单价枚举（10元 以上）'+'</td><td>'+'近12月'+'</td><td>'+'剔除交易金额最高的一笔及10元及以下的交易后，贷记卡每月笔单价枚举'+'</td><td>'+param.S5007+'</td></tr>'+
                    '<tr><td class="S5274">'+'贷记卡交易总金额'+'</td><td>'+'近12月'+'</td><td>'+'贷记卡交易总金额'+'</td><td>'+param.S5274+'</td></tr>';
                     html+='<tr><td class="S5275">'+'贷记卡交易总笔数'+'</td><td>'+'近12月'+'</td><td>'+'贷记卡交易总笔数'+'</td><td>'+param.S5275+'</td></tr>'+
                    '<tr><td class="S5279">'+'贷记卡交易总卡数'+'</td><td>'+'近12月'+'</td><td>'+'近6月，在该商户消费过的贷记卡数量'+'</td><td>'+param.S5279+'</td></tr>'+
                    '<tr><td class="S5276">'+'贷记卡交易金额占比'+'</td><td>'+'近12月'+'</td><td>'+'该商户下，贷记卡交易总金额占商户总交易金额的比例'+'</td><td>'+param.S5276+'</td></tr>'+
                    '<tr><td class="S5287">'+'贷记卡交易笔数占比'+'</td><td>'+'近12月'+'</td><td>'+'该商户下，贷记卡交易总笔数占商户总交易笔数的比例'+'</td><td>'+param.S5287+'</td></tr>'+
                    '<tr><td class="S5267">'+'借记卡交易金额枚举'+'</td><td>'+'近12月'+'</td><td>'+'在该商户消费过的借记卡金额枚举'+'</td><td>'+param.S5267+'</td></tr>'+
                    '<tr><td class="S5268">'+'借记卡交易笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'在该商户消费过的借记卡笔数枚举'+'</td><td>'+param.S5268+'</td></tr>'+
                    '<tr><td class="S5008">'+'每月借记卡笔单价枚举（10元 以上）'+'</td><td>'+'近12月'+'</td><td>'+'剔除交易金额最高的一笔及10元及以下的交易后，借记卡每月笔单价枚举'+'</td><td>'+param.S5008+'</td></tr>'+
                    '<tr><td class="S5271">'+'借记卡交易笔数枚举'+'</td><td>'+'近12月'+'</td><td>'+'借记卡交易笔数枚举'+'</td><td>'+param.S5271+'</td></tr>'+
                    '<tr><td class="S5272">'+'借记卡的交易总笔数'+'</td><td>'+'近12月'+'</td><td>'+'借记卡的交易总笔数'+'</td><td>'+param.S5272+'</td></tr>'+
                    '<tr><td class="S5280">'+'借记卡交易总卡数'+'</td><td>'+'近12月'+'</td><td>'+'近6月，在该商户消费过的借记卡数量'+'</td><td>'+param.S5280+'</td></tr>'+
                    '<tr><td class="S5273">'+'借记卡交易金额占比'+'</td><td>'+'近12月'+'</td><td>'+'该商户下，借记卡交易总金额占商户总交易金额的比例'+'</td><td>'+param.S5273+'</td></tr>'+
                    '<tr><td class="S5286">'+'借记卡交易笔数占比v</td><td>'+'近12月'+'</td><td>'+'该商户下，借记卡交易总笔数占商户总交易笔数的比例'+'</td><td>'+param.S5286+'</td></tr>'+
                    '<tr><td class="S5278">'+'贷记卡借记卡客单价比例'+'</td><td>'+'近12月'+'</td><td>'+'贷记卡客单价与借记卡客单价的比例'+'</td><td>'+param.S5278+'</td></tr>'+
                    '<tr><td class="S5277">'+'贷记卡借记卡交易笔数比例'+'</td><td>'+'近12月'+'</td><td>'+'贷记卡交易笔数与借记卡交易笔数的比例'+'</td><td>'+param.S5277+'</td></tr>'+
                    '<tr><td class="S5012">'+'每月贷记卡借记卡交易笔数比例枚举（10元以上）'+'</td><td>'+'近12月</td><td>'+'贷记卡交易笔数与借记卡交易笔数的比例，每月枚举'+'</td><td>'+param.S5012+'</td></tr>'+
                    '<tr><td class="S5253">v贷记卡交易失败比例v</td><td>'+'近12月'+'</td><td>'+'全部失败交易中，贷记卡失败的比例'+'</td><td>'+param.S5253+'</td></tr>'+
                    '<tr><td class="S5208">'+'夜消费交易总金额v</td><td>'+'近6月'+'</td><td>'+'22:00-5:00期间的交易总金额'+'</td><td>'+param.S5208+'</td></tr>'+
                    '<tr><td class="S5209">'+'夜消费交易总笔数'+'</td><td>'+'近6月'+'</td><td>'+'22:00-5:00期间的交易总笔数'+'</td><td>'+param.S5209+'</td></tr>'+
                    '<tr><td class="S5281">'+'疑似信用卡套现甄别'+'</td><td>'+'近12月'+'</td><td>'+'套现金额；套现笔数;套现金额占比'+'</td><td>'+param.S5281+'</td></tr>'+
                     '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8004:
                if(param.data.statusCode === '2012'){
                    var param=param.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td>'+'手机号'+'</td><td>'+param.cellphone+'</td></tr>'+
                        '<tr><td>'+'省'+'</td><td>'+param.province+'</td></tr>'+
                        '<tr><td >'+'市'+'</td><td >'+param.city+'</td></tr>'+
                        '<tr><td >'+'查询时间段'+'</td><td >'+param.data.S002.cycle+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'信贷平台注册详情'+'</th></tr>'
                    angular.forEach(param.data.S002.data,function (creditRegister,index) {
                        html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                            '<tr><td >'+'平台类型(0 全部 1 银行 2 非银行)'+'</td><td >'+creditRegister.platformType+'</td></tr>'+
                            '<tr><td >'+'注册时间'+'</td><td >'+creditRegister.registerTime+'</td></tr>'
                    });
                    html +='<tr><th colspan="2" class="tableBg">'+'贷款申请详情'+'</th></tr>'
                    angular.forEach(param.data.S004.data,function (loanApplication,index) {
                        html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                            '<tr><td >'+'平台类型(0 全部 1 银行 2 非银行)'+'</td><td >'+loanApplication.platformType+'</td></tr>'+
                            '<tr><td >'+'申请时间'+'</td><td >'+loanApplication.registerTime+'</td></tr>'+
                            '<tr><td >'+'申请金额区间'+'</td><td >'+loanApplication.applicationAmount+'</td></tr>'+
                            '<tr><td >'+'申请结果'+'</td><td >'+loanApplication.applicationResult+'</td></tr>'
                    });
                    html +='<tr><th colspan="2" class="tableBg">'+'贷款放款详情'+'</th></tr>'
                    angular.forEach(param.data.S007.data,function (loanOut,index) {
                        html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                            '<tr><td >'+'平台类型(0 全部 1 银行 2 非银行)'+'</td><td >'+loanOut.platformType+'</td></tr>'+
                            '<tr><td >'+'放款时间'+'</td><td >'+loanOut.loanLendersTime+'</td></tr>'+
                            '<tr><td >'+'放款金额区间'+'</td><td >'+loanOut.loanLendersAmount+'</td></tr>'
                    });
                    html +='<tr><th colspan="2" class="tableBg">'+'贷款驳回详情'+'</th></tr>'
                    angular.forEach(param.data.S009.data,function (loanIn,index) {
                        html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                            '<tr><td >'+'平台类型(0 全部 1 银行 2 非银行)'+'</td><td >'+loanIn.platformType+'</td></tr>'+
                            '<tr><td >'+'驳回时间'+'</td><td >'+loanIn.rejectionTime+'</td></tr>'
                    });
                    html +='<tr><th colspan="2" class="tableBg">'+'逾期平台详情查询'+'</th></tr>'
                    angular.forEach(param.data.S012.data,function (loanDelay,index) {
                        html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                            '<tr><td >'+'逾期数量'+'</td><td >'+loanDelay.counts+'</td></tr>'+
                            '<tr><td >'+'逾期金额区间'+'</td><td >'+loanDelay.money+'</td></tr>'
                    });
                    html+=  '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8005:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><th colspan="2" class="tableBg">'+'信贷平台注册信息'+'</th></tr>'+
                        '<tr><td class="widthF">'+'查询时间段'+'</td><td class="widthF">'+param.S001.cycle+'</td></tr>'+
                        '<tr><td>'+'注册总数'+'</td><td>'+param.S001.registerNum+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'信贷平台注册详情'+'</th></tr>'+
                        '<tr><td>'+'查询时间段'+'</td><td>'+param.S002.cycle+'</td></tr>'+
                        angular.forEach(param.S002.data,function (S002,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td>'+'平台类型(0 全部 1 银行 2 非银行)'+'</td><td>'+S002.platformType+'</td></tr>'+
                                '<tr><td>'+'注册时间'+'</td><td>'+S002.registerTime+'</td></tr>'
                        });
                    html +='<tr><th colspan="2" class="tableBg">'+'贷款申请次数'+'</th></tr>'+
                        '<tr><td>'+'查询时间段'+'</td><td>'+param.S003.cycle+'</td></tr>'+
                        '<tr><td>'+'申请次数'+'</td><td>'+param.S003.loanNum+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'贷款申请详情'+'</th></tr>'+
                        '<tr><td>'+'查询时间段'+'</td><td>'+param.S004.cycle+'</td></tr>'+
                        angular.forEach(param.S004.data,function (S004,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td>'+'平台类型(0 全部 1 银行 2 非银行)'+'</td><td>'+S004.platformType+'</td></tr>'+
                                '<tr><td>'+'申请时间'+'</td><td>'+S004.applicationTime+'</td></tr>'+
                                '<tr><td>'+'申请金额区间'+'</td><td>'+S004.applicationAmount+'</td></tr>'+
                                '<tr><td>'+'申请结果'+'</td><td>'+S004.applicationResult+'</td></tr>'
                        });
                    html +='<tr><th colspan="2" class="tableBg">'+'贷款申请结果'+'</th></tr>'+
                        '<tr><td>'+'查询时间段'+'</td><td>'+param.S005.cycle+'</td></tr>'+
                        '<tr><td>'+'记录总条数'+'</td><td>'+param.S005.resultNum+'</td></tr>'+
                        '<tr><td>'+'申请通过次数'+'</td><td>'+param.S005.passes+'</td></tr>'+
                        '<tr><td>'+'申请被拒次数'+'</td><td>'+param.S005.rejected+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'贷款放款次数'+'</th></tr>'+
                        '<tr><td>'+'查询时间段'+'</td><td>'+param.S006.cycle+'</td></tr>'+
                        '<tr><td>'+'贷款放款次数'+'</td><td>'+param.S006.loanLendersNum+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'贷款放款详情'+'</th></tr>'+
                        '<tr><td>'+'查询时间段'+'</td><td>'+param.S007.cycle+'</td></tr>'+
                        angular.forEach(param.S007.data,function (S007,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td>'+'平台类型(0 全部 1 银行 2 非银行)'+'</td><td>'+S007.platformType+'</td></tr>'+
                                '<tr><td>'+'放款时间'+'</td><td>'+S007.loanLendersTime+'</td></tr>'+
                                '<tr><td>'+'放款金额区间'+'</td><td>'+S007.loanLendersAmount+'</td></tr>'
                        });
                    html +='<tr><th colspan="2" class="tableBg">'+'贷款驳回次数'+'</th></tr>'+
                        '<tr><td>'+'查询时间段'+'</td><td>'+param.S008.cycle+'</td></tr>'+
                        '<tr><td>'+'贷款驳回次数'+'</td><td>'+param.S008.loanRejectionNum+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'贷款驳回详情'+'</th></tr>'+
                        '<tr><td>'+'查询时间段'+'</td><td>'+param.S009.cycle+'</td></tr>'+
                        '<tr><td colspan="2">'+'暂无数据'+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'逾期信息查询'+'</th></tr>'+
                        '<tr><td>'+'手机号'+'</td><td>'+param.S010.cellphone+'</td></tr>'+
                        '<tr><td>'+'逾期总次数'+'</td><td>'+param.S010.counts+'</td></tr>'+
                        '<tr><td>'+'逾期金额区间'+'</td><td>'+param.S010.money+'</td></tr>'+
                        '<tr><td>'+'省'+'</td><td>'+param.S010.province+'</td></tr>'+
                        '<tr><td>'+'市'+'</td><td>'+param.S010.city+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'逾期平台查询'+'</th></tr>'+
                        '<tr><td>'+'手机号'+'</td><td>'+param.S011.cellphone+'</td></tr>'+
                        '<tr><td>'+'发生逾期的平台总数'+'</td><td>'+param.S011.counts+'</td></tr>'+
                        '<tr><td>'+'逾期金额区间'+'</td><td>'+param.S011.money+'</td></tr>'+
                        '<tr><td>'+'省'+'</td><td>'+param.S011.province+'</td></tr>'+
                        '<tr><td>'+'市'+'</td><td>'+param.S011.city+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'逾期平台详情查询'+'</th></tr>'+
                        '<tr><td>'+'手机号'+'</td><td>'+param.S012.cellphone+'</td></tr>'+
                        angular.forEach(param.S012.data,function (S012,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td>'+'平台类型(0 全部 1 银行 2 非银行)'+'</td><td>'+S012.platformType+'</td></tr>'+
                                '<tr><td>'+'该平台的逾期数量'+'</td><td>'+S012.counts+'</td></tr>'+
                                '<tr><td>'+'逾期金额区间'+'</td><td>'+S012.money+'</td></tr>'+
                                '<tr><td>'+'省'+'</td><td>'+S012.province+'</td></tr>'+
                                '<tr><td>'+'市'+'</td><td>'+S012.city+'</td></tr>'
                        });
                    html +='<tr><th colspan="2" class="tableBg">'+'欠款查询'+'</th></tr>'+
                        '<tr><td>'+'手机号'+'</td><td>'+param.S013.cellphone+'</td></tr>'+
                        angular.forEach(param.S013.data,function (S013,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td>'+'欠款金额区间'+'</td><td>'+S013.money+'</td></tr>'
                        });
                    html +='</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8006:
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'姓名、身份证'+'</td><td class="widthF">'+param+'</td></tr>'+
                        '</table>';
                break;
            case 8007:
                var param=param.data.statusMsg;
                var html =
                    '<table class="table-border-style grid_table">'+
                    '<tr><td class="widthF">'+'姓名、手机号'+'</td><td class="widthF">'+param+'</td></tr>'+
                    '</table>';
                break;
            case 8008:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><th colspan="2" class="tableBg">'+'个人判决文书详情'+'</th></tr>'+
                        '<tr><td class="widthF">'+'审结时间'+'</td><td class="widthF">'+param.concludeTime+'</td></tr>'+
                        '<tr><td>'+'案件类型'+'</td><td>'+param.caseType+'</td></tr>'+
                        '<tr><td>'+'内容'+'</td><td>'+param.content+'</td></tr>'+
                        '<tr><td>'+'法院名称'+'</td><td>'+param.court+'</td></tr>'+
                        '<tr><td>'+'案由编码'+'</td><td>'+param.caseCauseCode+'</td></tr>'+
                        '<tr><td>'+'标题'+'</td><td>'+param.title+'</td></tr>'+
                        '<tr><td>'+'审判员'+'</td><td>'+param.judge+'</td></tr>'+
                        '<tr><td>'+'案号'+'</td><td>'+param.caseNum+'</td></tr>'+
                        '<tr><td>'+'判决结果'+'</td><td>'+param.judgeResult+'</td></tr>'+
                        '<tr><td>'+'审理程序'+'</td><td>'+param.trialProcedure+'</td></tr>'+
                        '<tr><td>'+'案由'+'</td><td>'+param.caseCause+'</td></tr>'+
                        '<tr><td>'+'案由编码类型'+'</td><td>'+param.caseCauseCodeType+'</td></tr>'+
                        '<tr><td>'+'依据'+'</td><td>'+param.basis+'</td></tr>'+
                        '<tr><td>'+'法院等级'+'</td><td>'+param.courtLevel+'</td></tr>'+
                        '<tr><td>'+'司法类型'+'</td><td>'+param.judicialType+'</td></tr>'+
                        angular.forEach(param.partyInfo,function (partyInfo,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '当事人信息' + (index+1)+'</th></tr>'+
                                '<tr><td >'+'当事人生日'+'</td><td >'+partyInfo.birthday+'</td></tr>'+
                                '<tr><td >'+'当事人称号'+'</td><td >'+partyInfo.callName+'</td></tr>'+
                                '<tr><td >'+'当事人类型'+'</td><td >'+partyInfo.partyType+'</td></tr>'+
                                '<tr><td >'+'律师事务所'+'</td><td >'+partyInfo.lawOffice+'</td></tr>'+
                                '<tr><td >'+'地址'+'</td><td >'+partyInfo.address+'</td></tr>'+
                                '<tr><td >'+'当事人名称'+'</td><td >'+partyInfo.designation+'</td></tr>'+
                                '<tr><td >'+'当事人身份证号码'+'</td><td >'+partyInfo.idcard+'</td></tr>'+
                                '<tr><td >'+'委托辩护人'+'</td><td >'+partyInfo.entrustDefender+'</td></tr>'
                        });
                    html +='</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8009:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><th colspan="2" class="tableBg">'+'企业法人信息'+'</th></tr>'+
                        angular.forEach(param.legalPerson,function (legalPerson,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td >'+'查询人姓名'+'</td><td >'+legalPerson.name+'</td></tr>'+
                                '<tr><td >'+'企业(机构)名称'+'</td><td >'+legalPerson.entName+'</td></tr>'+
                                '<tr><td >'+'注册号'+'</td><td >'+legalPerson.regNo+'</td></tr>'+
                                '<tr><td >'+'企业(机构)类型'+'</td><td >'+legalPerson.entType+'</td></tr>'+
                                '<tr><td >'+'注册资本(万元)'+'</td><td >'+legalPerson.regCap+'</td></tr>'+
                                '<tr><td >'+'注册资本币种'+'</td><td >'+legalPerson.regCapCur+'</td></tr>'+
                                '<tr><td >'+'企业状态'+'</td><td >'+legalPerson.entStatus+'</td></tr>'
                        });
                    html +='<tr><th colspan="2" class="tableBg">'+'企业股东信息'+'</th></tr>'+
                    angular.forEach(param.shareholder,function (shareholder,index) {
                        html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                            '<tr><td >'+'查询人姓名'+'</td><td >'+shareholder.name+'</td></tr>'+
                            '<tr><td >'+'企业(机构)名称'+'</td><td >'+shareholder.entName+'</td></tr>'+
                            '<tr><td >'+'注册号'+'</td><td >'+shareholder.regNo+'</td></tr>'+
                            '<tr><td >'+'企业(机构)类型'+'</td><td >'+shareholder.entType+'</td></tr>'+
                            '<tr><td >'+'注册资本(万元)'+'</td><td >'+shareholder.regCap+'</td></tr>'+
                            '<tr><td >'+'注册资本币种'+'</td><td >'+shareholder.regCapCur+'</td></tr>'+
                            '<tr><td >'+'企业状态'+'</td><td >'+shareholder.entStatus+'</td></tr>'+
                            '<tr><td >'+'认缴出资额(万元)'+'</td><td >'+shareholder.contriAmount+'</td></tr>'+
                            '<tr><td >'+'认缴出资币种'+'</td><td >'+shareholder.currency+'</td></tr>'+
                            '<tr><td >'+'出资方式'+'</td><td >'+shareholder.contriForm+'</td></tr>'+
                            '<tr><td >'+'出资比例'+'</td><td >'+shareholder.contriRatio+'</td></tr>'
                    });
                    html +='<tr><th colspan="2" class="tableBg">'+'企业主要管理人员信息'+'</th></tr>'+
                        angular.forEach(param.manager,function (manager,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td >'+'查询人姓名'+'</td><td >'+manager.name+'</td></tr>'+
                                '<tr><td >'+'企业(机构)名称'+'</td><td >'+manager.entName+'</td></tr>'+
                                '<tr><td >'+'注册号'+'</td><td >'+manager.regNo+'</td></tr>'+
                                '<tr><td >'+'企业(机构)类型'+'</td><td >'+manager.entType+'</td></tr>'+
                                '<tr><td >'+'注册资本(万元)'+'</td><td >'+manager.regCap+'</td></tr>'+
                                '<tr><td >'+'注册资本币种'+'</td><td >'+manager.regCapCur+'</td></tr>'+
                                '<tr><td >'+'企业状态'+'</td><td >'+manager.entStatus+'</td></tr>'+
                                '<tr><td >'+'职务'+'</td><td >'+manager.position+'</td></tr>'
                        });
                    html +='<tr><th colspan="2" class="tableBg">'+'失信未执行人信息'+'</th></tr>'+
                        angular.forEach(param.dishonestPunished,function (dishonestPunished,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td >'+'案号'+'</td><td >'+dishonestPunished.caseCode+'</td></tr>'+
                                '<tr><td >'+'被执行人姓名/名称'+'</td><td >'+dishonestPunished.executedName+'</td></tr>'+
                                '<tr><td >'+'失信人类型'+'</td><td >'+dishonestPunished.type+'</td></tr>'+
                                '<tr><td >'+'性别'+'</td><td >'+dishonestPunished.gender+'</td></tr>'+
                                '<tr><td >'+'身份证号码/工商注册号'+'</td><td >'+dishonestPunished.cardNo+'</td></tr>'+
                                '<tr><td >'+'身份证原始发证地'+'</td><td >'+dishonestPunished.idAddress+'</td></tr>'+
                                '<tr><td >'+'法定代表人/负责人姓名'+'</td><td >'+dishonestPunished.legalPersonName+'</td></tr>'+
                                '<tr><td >'+'立案时间'+'</td><td >'+dishonestPunished.publishDate+'</td></tr>'+
                                '<tr><td >'+'公布时间'+'</td><td >'+dishonestPunished.position+'</td></tr>'+
                                '<tr><td >'+'执行法院'+'</td><td >'+dishonestPunished.courtName+'</td></tr>'+
                                '<tr><td >'+'省份'+'</td><td >'+dishonestPunished.province+'</td></tr>'+
                                '<tr><td >'+'执行依据文号'+'</td><td >'+dishonestPunished.executionNumber+'</td></tr>'+
                                '<tr><td >'+'做出执行依据单位'+'</td><td >'+dishonestPunished.department+'</td></tr>'+
                                '<tr><td >'+'生效法律文书确定的义务'+'</td><td >'+dishonestPunished.duty+'</td></tr>'+
                                '<tr><td >'+'失信未执行人行为具体情形'+'</td><td >'+dishonestPunished.dishonestSituation+'</td></tr>'+
                                '<tr><td >'+'被执行人的履行情况'+'</td><td >'+dishonestPunished.performance+'</td></tr>'+
                                '<tr><td >'+'已履行'+'</td><td >'+dishonestPunished.performedPart+'</td></tr>'+
                                '<tr><td >'+'未履行'+'</td><td >'+dishonestPunished.unperformPart+'</td></tr>'+
                                '<tr><td >'+'年龄'+'</td><td >'+dishonestPunished.age+'</td></tr>'+
                                '<tr><td >'+'关注人数'+'</td><td >'+dishonestPunished.focusNumber+'</td></tr>'+
                                '<tr><td >'+'加密后的退出日期'+'</td><td >'+dishonestPunished.exitDate+'</td></tr>'
                        });
                    html +='<tr><th colspan="2" class="tableBg">'+'被执行人信息'+'</th></tr>'+
                        angular.forEach(param.punished,function (punished,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td >'+'被执行人姓名/名称'+'</td><td >'+punished.executedName+'</td></tr>'+
                                '<tr><td >'+'立案时间'+'</td><td >'+punished.recordDate+'</td></tr>'+
                                '<tr><td >'+'执行法院'+'</td><td >'+punished.courtName+'</td></tr>'+
                                '<tr><td >'+'执行标的'+'</td><td >'+punished.execMoney+'</td></tr>'+
                                '<tr><td >'+'身份证号码/工商注册号'+'</td><td >'+punished.cardNoOrEntRegNo+'</td></tr>'+
                                '<tr><td >'+'性别'+'</td><td >'+punished.gender+'</td></tr>'+
                                '<tr><td >'+'年龄'+'</td><td >'+punished.age+'</td></tr>'+
                                '<tr><td >'+'省份'+'</td><td >'+punished.province+'</td></tr>'+
                                '<tr><td >'+'身份证原始发证地'+'</td><td >'+punished.idAddress+'</td></tr>'
                        });
                    html +='</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8010:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'裁判文书数据条数'+'</td><td class="widthF">'+param.totalCount+'</td></tr>'+

                        angular.forEach(param.docList,function (docList,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td>'+'裁判文书编号'+'</td><td>'+docList.docId+'</td></tr>'+
                                '<tr><td>'+'审结时间'+'</td><td>'+docList.concludeTimeString+'</td></tr>'+
                                '<tr><td>'+'标题'+'</td><td>'+docList.title+'</td></tr>'+
                                '<tr><td>'+'内容'+'</td><td>'+docList.content+'</td></tr>'+
                                '<tr><td>'+'数据类型'+'</td><td>'+docList.dataType+'</td></tr>'
                        });
                    html += '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8011:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'失信公告数据条数'+'</td><td class="widthF">'+param.count+'</td></tr>'+

                    angular.forEach(param.dishonestyList,function (dishonestyList,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td>'+'失信公告编号'+'</td><td>'+dishonestyList.id+'</td></tr>'+
                                '<tr><td>'+'立案时间'+'</td><td>'+dishonestyList.caseTime+'</td></tr>'+
                                '<tr><td>'+'标题'+'</td><td>'+dishonestyList.title+'</td></tr>'+
                                '<tr><td>'+'内容'+'</td><td>'+dishonestyList.content+'</td></tr>'+
                                '<tr><td>'+'数据类型'+'</td><td>'+dishonestyList.dataType+'</td></tr>'
                        });
                    html += '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8012:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        angular.forEach(param,function (param,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td class="widthF">'+'交易时间'+'</td><td class="widthF">'+param.transTime+'</td></tr>'+
                                '<tr><td>'+'交易金额（单位分）'+'</td><td>'+param.transAmount+'</td></tr>'
                        });
                    html += '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8013:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'姓名'+'</td><td class="widthF">'+param.name+'</td></tr>'+
                        '<tr><td>'+'身份证号'+'</td><td>'+param.idcard+'</td></tr>'+
                        '<tr><td>'+'出生日期'+'</td><td>'+param.birthday+'</td></tr>'+
                        '<tr><td>'+'出生地'+'</td><td>'+param.birthplace+'</td></tr>'+
                        '<tr><td>'+'乘机次数'+'</td><td>'+param.flightInfo.flightCount+'</td></tr>'+
                        '<tr><td>'+'国内次数'+'</td><td>'+param.flightInfo.flightDomesticCount+'</td></tr>'+
                        '<tr><td>'+'平均国内票价'+'</td><td>'+param.flightInfo.avgDomesticPrice+'</td></tr>'+
                        '<tr><td>'+'平均国内折扣'+'</td><td>'+param.flightInfo.avgDomesticDiscount+'</td></tr>'+
                        '<tr><td>'+'国际次数'+'</td><td>'+param.flightInfo.flightInterCount+'</td></tr>'+
                        '<tr><td>'+'平均国际票价'+'</td><td>'+param.flightInfo.avgInterPrice+'</td></tr>'+
                        '<tr><td>'+'最爱司航前三名'+'</td><td>'+param.flightInfo.favouriteAirline+'</td></tr>'+
                        '<tr><td>'+'最爱航司次数1'+'</td><td>'+param.flightInfo.favouriteAirlineCount+'</td></tr>'+
                        '<tr><td>'+'最爱目的地1-3'+'</td><td>'+param.flightInfo.favouriteDest+'</td></tr>'+
                        '<tr><td>'+'最爱目的地次数1-3'+'</td><td>'+param.flightInfo.favouriteDestCount+'</td></tr>'+
                        '<tr><td>'+'国内头等次数'+'</td><td>'+param.flightInfo.domesticFirstCount+'</td></tr>'+
                        '<tr><td>'+'国内商务次数'+'</td><td>'+param.flightInfo.domesticBusCount+'</td></tr>'+
                        '<tr><td>'+'国内经济次数'+'</td><td>'+param.flightInfo.domesticEcoCount+'</td></tr>'+
                        '<tr><td>'+'国际头等次数'+'</td><td>'+param.flightInfo.interFirstCount+'</td></tr>'+
                        '<tr><td>'+'国际商务次数'+'</td><td>'+param.flightInfo.interBusCount+'</td></tr>'+
                        '<tr><td>'+'国际经济次数'+'</td><td>'+param.flightInfo.interEcoCount+'</td></tr>'+
                        '<tr><td>'+'商务出行次数'+'</td><td>'+param.flightInfo.busOutCount+'</td></tr>'+
                        '<tr><td>'+'旅游出行次数'+'</td><td>'+param.flightInfo.travelOutCount+'</td></tr>'+
                        '<tr><td>'+'探亲出行次数'+'</td><td>'+param.flightInfo.visitOutCount+'</td></tr>'+
                        '<tr><td>'+'平均延误分钟数'+'</td><td>'+param.flightInfo.avgDelayTime+'</td></tr>'+
                        '<tr><td>'+'延误次数（大于30分钟）'+'</td><td>'+param.flightInfo.delayCount+'</td></tr>'+
                        '<tr><td>'+'大飞机次数'+'</td><td>'+param.flightInfo.bigPlaneCount+'</td></tr>'+
                        '<tr><td>'+'小飞机次数'+'</td><td>'+param.flightInfo.smallPlaneCount+'</td></tr>'+
                        '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8014:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'失信公告数据条数'+'</td><td class="widthF">'+param.count+'</td></tr>'+
                        angular.forEach(param.dishonestyList,function (dishonestyList,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td>'+'失信公告编号'+'</td><td>'+dishonestyList.id+'</td></tr>'+
                                '<tr><td>'+'立案时间'+'</td><td>'+dishonestyList.caseTime+'</td></tr>'+
                                '<tr><td>'+'标题'+'</td><td>'+dishonestyList.title+'</td></tr>'+
                                '<tr><td>'+'内容'+'</td><td>'+dishonestyList.content+'</td></tr>'+
                                '<tr><td>'+'数据类型'+'</td><td>'+dishonestyList.dataType+'</td></tr>'
                        });
                    html +='</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8015:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'裁判文书数据条数'+'</td><td class="widthF">'+param.totalCount+'</td></tr>'+
                        angular.forEach(param.docList,function (docList,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td>'+'裁判文书编号'+'</td><td>'+docList.docId+'</td></tr>'+
                                '<tr><td>'+'审结时间'+'</td><td>'+docList.concludeTimeString+'</td></tr>'+
                                '<tr><td>'+'标题'+'</td><td>'+docList.title+'</td></tr>'+
                                '<tr><td>'+'内容'+'</td><td>'+docList.content+'</td></tr>'+
                                '<tr><td>'+'数据类型'+'</td><td>'+docList.dataType+'</td></tr>'
                        });
                    html +='</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8016:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        angular.forEach(param,function (param,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td class="widthF">'+'交易时间'+'</td><td class="widthF">'+param.transTime+'</td></tr>'+
                                '<tr><td>'+'交易金额（单位分）'+'</td><td>'+param.transAmount+'</td></tr>'+
                                '<tr><td>'+'银行卡'+'</td><td>'+param.card+'</td></tr>'
                        });
                    html +='</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8017:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'是否包含最小值'+'</td><td class="widthF">'+param.minIncluded+'</td></tr>'+
                        '<tr><td>'+'是否包含最大值'+'</td><td>'+param.maxIncluded+'</td></tr>'+
                        '<tr><td>'+'最小值'+'</td><td>'+param.min+'</td></tr>'+
                        '<tr><td>'+'最大值'+'</td><td>'+param.max+'</td></tr>'+
                        '<tr><td>'+'单位（月）'+'</td><td>'+param.unit+'</td></tr>'+
                        '</table>';
                }
                else{
                        var param=param.data.statusMsg;
                        var html =
                            '<table class="table-border-style grid_table">'+
                            '<tr><td class="widthE">'+param+'</td></tr>'+
                            '</table>';
                }
                break;
            case 8018:
                if(param.data.statusCode === '2012'){
                var param=param.data.result;
                var html =
                    '<table class="table-border-style grid_table">'+
                    '<tr><td class="widthF">'+'手机号状态'+'</td><td class="widthF">'+param.cellphoneStatus+'</td></tr>'+
                    '</table>';
            }
            else{
                var param=param.data.statusMsg;
                var html =
                    '<table class="table-border-style grid_table">'+
                    '<tr><td class="widthE">'+param+'</td></tr>'+
                    '</table>';
            }
                break;
            case 8019:
                if(param.data.statusCode === '2005'){
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'姓名身份证是否一致'+'</td><td class="widthF">'+param+'</td></tr>'+
                        '</table>';
                }
                if(param.data.statusCode === '2006'){
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'姓名身份证是否一致'+'</td><td class="widthF">'+param+'</td></tr>'+
                        '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8020:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        angular.forEach(param.param,function (param,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td class="widthF">'+'涉案类型'+'</td><td class="widthF">'+param.crimeType+'</td></tr>'+
                                '<tr><td>'+'案件数量'+'</td><td>'+param.count+'</td></tr>'+
                                '<tr><td>'+'案件类别'+'</td><td>'+param.caseType+'</td></tr>'+
                                '<tr><td>'+'案件时间段'+'</td><td>'+param.casePeriod+'</td></tr>'+
                                '<tr><td>'+'案件来源'+'</td><td>'+param.caseSource+'</td></tr>'+
                                '<tr><td>'+'案件级别'+'</td><td>'+param.caseLevel+'</td></tr>'
                        });
                    html += '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8021:
                var param=param.data.statusMsg;
                var html =
                    '<table class="table-border-style grid_table">'+
                    '<tr><td class="widthF">'+'姓名、手机号、身份证'+'</td><td width="40%">'+param+'</td></tr>'+
                    '</table>';
                break;
            case 8022:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'姓名'+'</td><td class="widthF">'+param.name+'</td></tr>'+
                        '<tr><td>'+'毕业院校'+'</td><td>'+param.college+'</td></tr>'+
                        '<tr><td>'+'学历'+'</td><td>'+param.degree+'</td></tr>'+
                        '<tr><td>'+'入学年份'+'</td><td>'+param.startTime+'</td></tr>'+
                        '<tr><td>'+'专业'+'</td><td>'+param.specialty+'</td></tr>'+
                        '<tr><td>'+'毕业时间'+'</td><td>'+param.graduateTime+'</td></tr>'+
                        '<tr><td>'+'毕业结论'+'</td><td>'+param.studyResult+'</td></tr>'+
                        '<tr><td>'+'学历类型'+'</td><td>'+param.degreeStyle+'</td></tr>'+
                        '<tr><td>'+'毕业院校类型'+'</td><td>'+param.collegeType+'</td></tr>'+
                        '<tr><td>'+'学校所在城市'+'</td><td>'+param.collegeCity+'</td></tr>'+
                        '<tr><td>'+'学校性质(公办、民办等)'+'</td><td>'+param.character+'</td></tr>'+
                        '<tr><td>'+'学校所属主管单位'+'</td><td>'+param.manageDept+'</td></tr>'+
                        '<tr><td>'+'学校类型(理工、医药、综合等)'+'</td><td>'+param.schoolType+'</td></tr>'+
                        '<tr><td>'+'学校类别(211 工程院校)'+'</td><td>'+param.collegeCategory+'</td></tr>'+
                        '<tr><td>'+'办学层次'+'</td><td>'+param.collegeLevel+'</td></tr>'+
                        '<tr><td>'+'办学形式(全日制、函授等)'+'</td><td>'+param.educationApproach+'</td></tr>'+
                        '<tr><td>'+'是否为 985(Y为是，N为否)'+'</td><td>'+param.is985+'</td></tr>'+
                        '<tr><td>'+'是否为 211(Y为是，N为否)'+'</td><td>'+param.is211+'</td></tr>'+
                        '<tr><td>'+'学校创建日期'+'</td><td>'+param.createDate+'</td></tr>'+
                        '<tr><td>'+'创建年限'+'</td><td>'+param.createYears+'</td></tr>'+
                        '<tr><td>'+'学校院士人数'+'</td><td>'+param.academicianNum+'</td></tr>'+
                        '<tr><td>'+'博士后流动站数目'+'</td><td>'+param.postDoctorNum+'</td></tr>'+
                        '<tr><td>'+'博士点数目'+'</td><td>'+param.doctorDegreeNum+'</td></tr>'+
                        '<tr><td>'+'硕士点数目'+'</td><td>'+param.masterDegreeNum+'</td></tr>'+
                        '<tr><td>'+'国家重点学科数目'+'</td><td>'+param.nationalSubjectNum+'</td></tr>'+
                        '<tr><td>'+'学习形式'+'</td><td>'+param.studyStyle+'</td></tr>'+
                        '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8023:
                //TODO
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><th width="80%" colspan="2" class="tableBg">'+'核心消费指标'+'</th></tr>'+
                        '<tr><td class="widthF">'+'卡性质'+'</td><td class="widthF">'+param.indexProperty.cardProperty+'</td></tr>'+
                        '<tr><td>'+'首次交易日期'+'</td><td>'+param.indexProperty.firstTransDate+'</td></tr>'+
                        '<tr><td>'+'消费总金额'+'</td><td>'+param.indexProperty.transTotalAmount+'</td></tr>'+
                        '<tr><td>'+'消费总笔数'+'</td><td>'+param.indexProperty.transTotalCount+'</td></tr>'+
                        '<tr><td>'+'取现总金额'+'</td><td>'+param.indexProperty.cashTotalAmount+'</td></tr>'+
                        '<tr><td>'+'取现总笔数'+'</td><td>'+param.indexProperty.cashTotalCount+'</td></tr>'+
                        '<tr><td>'+'还款总金额'+'</td><td>'+param.indexProperty.refundTotalAmount+'</td></tr>'+
                        '<tr><td>'+'还款总笔数'+'</td><td>'+param.indexProperty.refundTotalCount+'</td></tr>'+
                        '<tr><td>'+'刚需类消费占比'+'</td><td>'+param.indexProperty.rigidTransAmountPercent+'</td></tr>'+
                        '<tr><td>'+'常住城市'+'</td><td>'+param.indexProperty.fromCity+'</td></tr>'+
                        '<tr><td>'+'近12月没有发生交易的周数占比'+'</td><td>'+param.indexProperty.noTransWeekPercent+'</td></tr>'+
                        '<tr><td>'+'最大单月消费金额'+'</td><td>'+param.indexProperty.monthlyCardLargeAmount+'</td></tr>'+
                        '<tr><th width="80%" colspan="2" class="tableBg">'+'每月消费状况'+'</th></tr>'+
                        '<tr><td>'+'消费金额'+'</td><td>'+param.indexMonthConsumes.transAmount+'</td></tr>'+
                        '<tr><td>'+'消费金额在本市的排名'+'</td><td>'+param.indexMonthConsumes.amountRank+'</td></tr>'+
                        '<tr><td>'+'消费笔数'+'</td><td>'+param.indexMonthConsumes.transCount+'</td></tr>'+
                        '<tr><td>'+'消费笔数在本市的排名'+'</td><td>'+param.indexMonthConsumes.countRank+'</td></tr>'+
                        '<tr><td>'+'取现金额'+'</td><td>'+param.indexMonthConsumes.cashAmount+'</td></tr>'+
                        '<tr><td>'+'取现笔数'+'</td><td>'+param.indexMonthConsumes.cashCount+'</td></tr>'+
                        '<tr><th width="80%" colspan="2" class="tableBg">'+'消费大类分布'+'</th></tr>'+
                        '<tr><td>'+'消费金额分布'+'</td><td>'+param.indexConsumeCategories.transAmountPercent+'</td></tr>'+
                        '<tr><td>'+'消费笔数分布'+'</td><td>'+param.indexConsumeCategories.transCountPercent+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'消费地点分布'+'</th></tr>'+
                        '<tr><td>'+'消费金额分布'+'</td><td>'+param.indexConsumeCities.placesTransAmountPercent+'</td></tr>'+
                        '<tr><td>'+'消费笔数分布'+'</td><td>'+param.indexConsumeCities.placesTransCountPercent+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'消费行为特征'+'</th></tr>'
                        html += '<tr><td>'+'有无出差'+'</td><td>'+param.indexTransBehavior.ifHasBusinessTrip+'</td></tr>'+
                        '<tr><td>'+'有无婚庆消费'+'</td><td>'+param.indexTransBehavior.ifHasWeddingTrans+'</td></tr>'+
                        '<tr><td>'+'有无家庭特征'+'</td><td>'+param.indexTransBehavior.ifHasFamily+'</td></tr>'+
                        '<tr><td>'+'有无境外消费'+'</td><td>'+param.indexTransBehavior.ifHasOverseasTrans+'</td></tr>'+
                        '<tr><td>'+'有无夜消费'+'</td><td>'+param.indexTransBehavior.ifHasNightTrans+'</td></tr>'+
                        '<tr><td>'+'有无博彩业消费'+'</td><td>'+param.indexTransBehavior.ifHasLotteryTrans+'</td></tr>'+
                        '<tr><td>'+'有无无业特征'+'</td><td>'+param.indexTransBehavior.ifHasUnemployed+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'特殊交易统计'+'</th></tr>'+
                        '<tr><td>'+'公共事业缴费金额'+'</td><td>'+param.indexTransCredits.publicPayAmount+'</td></tr>'+
                        '<tr><td>'+'公共事业缴费笔数'+'</td><td>'+param.indexTransCredits.publicPayCount+'</td></tr>'+
                        '<tr><td>'+'纳税金额'+'</td><td>'+param.indexTransCredits.taxAmount+'</td></tr>'+
                        '<tr><td>'+'纳税笔数'+'</td><td>'+param.indexTransCredits.taxCount+'</td></tr>'+
                        '<tr><td>'+'夜消费金额'+'</td><td>'+param.indexTransCredits.nightTransAmount+'</td></tr>'+
                        '<tr><td>'+'夜消费笔数'+'</td><td>'+param.indexTransCredits.nightTransCount+'</td></tr>'+
                        '<tr><td>'+'博彩业消费金额'+'</td><td>'+param.indexTransCredits.lotteryTransAmount+'</td></tr>'+
                        '<tr><td>'+'博彩业消费笔数'+'</td><td>'+param.indexTransCredits.lotteryTransCount+'</td></tr>'+
                        '<tr><td>'+'网上消费金额'+'</td><td>'+param.indexTransCredits.onlineTransAmount+'</td></tr>'+
                        '<tr><td>'+'网上消费笔数'+'</td><td>'+param.indexTransCredits.onlineTransCount+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'疑似套现行为甄别'+'</th></tr>'+
                        '<tr><td>'+'近一年疑似套现金额'+'</td><td>'+param.cashout.latestYearSeemCreditCardCashAmount+'</td></tr>'+
                        '<tr><td>'+'近一年疑似套现笔数'+'</td><td>'+param.cashout.latestYearSeemCreditCardCashCount+'</td></tr>'+
                        '<tr><td>'+'近一年套现高危行业交易金额占比'+'</td><td>'+param.cashout.latestYearSeemHighRiskCashAmountPercent+'</td></tr>'+
                        '<tr><td>'+'近一年套现高危行业交易笔数占比'+'</td><td>'+param.cashout.latestYearSeemHighRiskCashCountPercent+'</td></tr>'+
                        '</table>';
                }
            else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8024:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'助贷中介机构'+'</td><td class="widthF">'+param.msg+'</td></tr>'+
                        '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8025:
                if(param.data.statusCode === '2012'){
                    var param=param.data.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'风险名单'+'</td><td class="widthF">'+param.msg+'</td></tr>'+
                        '<tr><td>'+'逾期风险评分'+'</td><td>'+param.overdueRiskFactor+'</td></tr>'+
                        '<tr><td>'+'多头借贷风险评分'+'</td><td>'+param.loanRiskFactor+'</td></tr>'+
                        '</table>';
                }
                else{
                    var param=param.data.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8026:
                if(param.status === '0' && param.result.list){
                    var param=param.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td>'+'姓名或公司名称'+'</td><td>'+param.realname+'</td></tr>'+
                    angular.forEach(param.list,function (list,index) {
                            html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                                '<tr><td class="widthF">'+'年龄'+'</td><td class="widthF">'+list.age+'</td></tr>'+
                                '<tr><td>'+'性别'+'</td><td>'+list.sex+'</td></tr>'+
                                '<tr><td>'+'身份证号或组织机构代码'+'</td><td>'+list.idcard+'</td></tr>'+
                                '<tr><td>'+'立案时间'+'</td><td>'+list.filingdate+'</td></tr>'+
                                '<tr><td>'+'案号'+'</td><td>'+list.caseno+'</td></tr>'+
                                '<tr><td>'+'执行依据文号'+'</td><td>'+list.baseonno+'</td></tr>'+
                                '<tr><td>'+'做出执行依据单位'+'</td><td>'+list.baseonorg+'</td></tr>'+
                                '<tr><td>'+'执行法院'+'</td><td>'+list.court+'</td></tr>'+
                                '<tr><td>'+'省份'+'</td><td>'+list.province+'</td></tr>'+
                                '<tr><td>'+'生效法律文书确定的义务'+'</td><td>'+list.duty+'</td></tr>'+
                                '<tr><td>'+'被执行人的履行情况'+'</td><td>'+list.performance+'</td></tr>'+
                                '<tr><td>'+'失信被执行人行为具体情形'+'</td><td>'+list.description+'</td></tr>'+
                                '<tr><td>'+'发布时间'+'</td><td>'+list.pubdate+'</td></tr>'
                        });
                    html += '</table>';
                }
                else{
                    var param=param.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+'本数据库中未查得'+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8027:
                if(param.result.verifystatus === '0'){
                var param=param.result.verifymsg;
                var html =
                    '<table class="table-border-style grid_table">'+
                    '<tr><td class="widthF">'+'姓名、手机号、银行卡、身份证'+'</td><td class="widthF">'+param+'</td></tr>'+
                    '</table>';
            }
                if(param.result.verifystatus === '1'){
                    var param=param.result.verifymsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'姓名、手机号、银行卡、身份证'+'</td><td class="widthF">'+param+'</td></tr>'+
                        '</table>';
                }
                if(param.status === '205'){
                    var param=param.msg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8028:
                if(param.status === '0'){
                    var param=param.result.verifymsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'姓名、银行卡'+'</td><td class="widthF">'+param+'</td></tr>'+
                        '</table>';
                }
                else{
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+'本数据库中未查得'+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8030:
                if(param.result.verifystatus === '0'){
                    var param=param.result.verifymsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'姓名、手机号、身份证'+'</td><td class="widthF">'+param+'</td></tr>'+
                        '</table>';
                }
                if(param.result.verifystatus === '1'){
                    var param=param.result.verifymsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'姓名、手机号、身份证'+'</td><td class="widthF">'+param+'</td></tr>'+
                        '</table>';
                }
                if(param.status === '206'){
                    var param=param.msg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8031:
                if(param.status === '0'){
                    var param=param.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><th colspan="2" class="tableBg">'+'企业基本信息'+'</th></tr>'+
                        '<tr><td>'+'公司名称'+'</td><td>'+param.basic.name+'</td></tr>'+
                        '<tr><td>'+'公司类型'+'</td><td>'+param.basic.type+'</td></tr>'+
                        '<tr><td>'+'注册资本'+'</td><td>'+param.basic.regcapital+'</td></tr>'+
                        '<tr><td>'+'经营范围'+'</td><td>'+param.basic.scope+'</td></tr>'+
                        '<tr><td>'+'经营起始日期'+'</td><td>'+param.basic.startdate+'</td></tr>'+
                        '<tr><td>'+'经营终止日期'+'</td><td>'+param.basic.enddate+'</td></tr>'+
                        '<tr><td>'+'登记机关'+'</td><td>'+param.basic.regorgan+'</td></tr>'+
                        '<tr><td>'+'法人代表'+'</td><td>'+param.basic.legalperson+'</td></tr>'+
                        '<tr><td>'+'核准日期'+'</td><td>'+param.basic.approvaldate+'</td></tr>'+
                        '<tr><td>'+'注册日期'+'</td><td>'+param.basic.regdate+'</td></tr>'+
                        '<tr><td>'+'注销日期'+'</td><td>'+param.basic.canceldate+'</td></tr>'+
                        '<tr><td>'+'登记状态'+'</td><td>'+param.basic.status+'</td></tr>'+
                        '<tr><td>'+'组织结构代码'+'</td><td>'+param.basic.orgno+'</td></tr>'+
                        '<tr><td>'+'统一信用代码'+'</td><td>'+param.basic.creditno+'</td></tr>'+
                        '<tr><td>'+'省份'+'</td><td>'+param.basic.province+'</td></tr>'+
                        '<tr><td>'+'注册号'+'</td><td>'+param.basic.regno+'</td></tr>'+
                        '<tr><td>'+'注册地址'+'</td><td>'+param.basic.regaddress+'</td></tr>'+
                        '<tr><th colspan="2" class="tableBg">'+'管理人员'+'</th></tr>'+
                        angular.forEach(param.keyperson,function (keyperson,index) {
                        html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                            '<tr><td>'+'变更名称'+'</td><td>'+keyperson.name+'</td></tr>'+
                            '<tr><td>'+'变更前内容'+'</td><td>'+keyperson.beforecontent+'</td></tr>'+
                            '<tr><td>'+'变更后内容'+'</td><td>'+keyperson.aftercontent+'</td></tr>'+
                            '<tr><td>'+'变更日期'+'</td><td>'+keyperson.changedate+'</td></tr>'
                    });
                    html +='<tr><th colspan="2" class="tableBg">'+'股东出资信息'+'</th></tr>'+
                    angular.forEach(param.shareholder,function (shareholder,index) {
                        html += '<tr><th colspan="2" class="tableBg">' + '信息' + (index+1)+'</th></tr>'+
                            '<tr><td>'+'人员姓名'+'</td><td>'+shareholder.name+'</td></tr>'+
                            '<tr><td>'+'类型'+'</td><td>'+shareholder.type+'</td></tr>'+
                            '<tr><td>'+'证件类型'+'</td><td>'+shareholder.cardtype+'</td></tr>'+
                            '<tr><td>'+'证件号码'+'</td><td>'+shareholder.cardno+'</td></tr>'+
                            '<tr><td>'+'认缴资本'+'</td><td>'+shareholder.subcapital+'</td></tr>'+
                            '<tr><td>'+'实付资本'+'</td><td>'+shareholder.paidcapital+'</td></tr>'
                    });
                    html += '</table>';
                }
                else{
                    var param=param.statusMsg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+'本数据库中未查得'+'</td></tr>'+
                        '</table>';
                }
                break;
            case 8032:
                if(param.status === '0'){
                    var param=param.result;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthF">'+'手机号所在省份'+'</td><td class="widthF">'+param.province+'</td></tr>'+
                        '<tr><td>'+'手机号所在城市'+'</td><td>'+param.city+'</td></tr>'+
                        '<tr><td>'+'手机号供应商'+'</td><td>'+param.company+'</td></tr>'+
                        '<tr><td>'+'手机号所属类型'+'</td><td>'+param.cardtype+'</td></tr>'+
                        '<tr><td>'+'手机号当地区号'+'</td><td>'+param.areacode+'</td></tr>'+
                        '</table>';
                }
                else{
                    var param=param.msg;
                    var html =
                        '<table class="table-border-style grid_table">'+
                        '<tr><td class="widthE">'+param+'</td></tr>'+
                        '</table>';
                }
                break;
        }

            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var hour = today.getHours();
            var minute = today.getMinutes();

            //使用form来生成下载所需的数据
            var form = $("<form>");
            form.attr("style", "display:none");
            form.attr("target", "");
            form.attr("method", "post");
            form.attr("action", "http://www.jinrongfengkong.com/createpdf");

            var input1 = $("<input>");
            input1.attr("type", "hidden");
            input1.attr("name", "html");
            input1.attr("value", html);
            form.append(input1);

            var input2 = $("<input>");
            input2.attr("type", "hidden");
            input2.attr("name", "filename");
            input2.attr("value", pdfname + year + "." + month + "." + day + "_" + hour + "." + minute);
            form.append(input2);

            //将表单放置在web中
            $("body").append(form);
            form.submit();
        }
    // }
});




