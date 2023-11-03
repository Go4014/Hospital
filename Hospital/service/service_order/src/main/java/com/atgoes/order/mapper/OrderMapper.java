package com.atgoes.order.mapper;

import com.atgoes.yygh.model.order.OrderInfo;
import com.atgoes.yygh.vo.order.OrderCountQueryVo;
import com.atgoes.yygh.vo.order.OrderCountVo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface OrderMapper extends BaseMapper<OrderInfo> {

    //查询预约统计数据的方法
    List<OrderCountVo> selectOrderCount(@Param("vo") OrderCountQueryVo orderCountQueryVo);
}
