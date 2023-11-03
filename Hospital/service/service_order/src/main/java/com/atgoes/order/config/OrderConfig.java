package com.atgoes.order.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan("com.atgoes.order.mapper")
public class OrderConfig {

}
