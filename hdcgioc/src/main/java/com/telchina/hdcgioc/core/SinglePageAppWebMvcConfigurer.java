package com.telchina.hdcgioc.core;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.ResourceProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.io.IOException;

@Configuration // 标注此文件为一个配置项，spring boot才会扫描到该配置。该注解类似于之前使用xml进行配置
@EnableWebMvc
@Slf4j
public class SinglePageAppWebMvcConfigurer implements WebMvcConfigurer {
	@SuppressWarnings("unused")
	@Autowired
	private ResourceProperties resourceProperties;

	private String apiPath = "/api";

	public SinglePageAppWebMvcConfigurer() {
	}

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addRedirectViewController("/", "index.html");
	}

	public SinglePageAppWebMvcConfigurer(String apiPath) {
		this.apiPath = apiPath;
	}

	protected String getApiPath() {
		return apiPath;
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**").addResourceLocations("classpath:/static/")
				// .setCacheControl(CacheControl.maxAge(1,
				// TimeUnit.HOURS).cachePublic())
				.resourceChain(true).addResolver(new SinglePageAppResourceResolver());
	}

	private class SinglePageAppResourceResolver extends PathResourceResolver {
		@Override
		protected Resource getResource(String resourcePath, Resource location) throws IOException {
			Resource resource = location.createRelative(resourcePath);
			// log.info("Resource:" + resource.exists() +"---"+
			// resource.isReadable());
			if (resource.exists() && resource.isReadable()) {
				return resource;
			} else if (getApiPath() != null && ("/" + resourcePath).startsWith(getApiPath())) {
				return null;
			} else {
//				log.info("Routing /" + resourcePath + " to /index.html");
				resource = location.createRelative("index.html");
				if (resource.exists() && resource.isReadable()) {
					return resource;
				} else {
					return null;
				}
			}
		}
	}

}
