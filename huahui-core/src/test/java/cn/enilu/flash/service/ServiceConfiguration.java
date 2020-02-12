package cn.enilu.flash.service;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Arrays;

/**
 * Name: ServiceConfiguration<br>
 * User: Yao<br>
 * Date: 2018/2/27<br>
 * Time: 13:54<br>
 */
@SpringBootApplication
@EntityScan(basePackages="cn.enilu.flash.bean.entity")
@EnableJpaRepositories(basePackages= "cn.enilu.flash.dao")
public class ServiceConfiguration {



    public static void main(String[] args) {
        SpringApplication.run(ServiceConfiguration.class);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            System.out.println("Let's inspect the beans provided by Spring Boot:");

            String[] beanNames = ctx.getBeanDefinitionNames();
            Arrays.sort(beanNames);
            for (String beanName : beanNames) {
                System.out.println(beanName);
            }

        };
    }
}
