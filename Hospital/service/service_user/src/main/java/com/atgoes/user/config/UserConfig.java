package com.atgoes.user.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan("com.atgoes.user.mapper")
public class UserConfig {
}
