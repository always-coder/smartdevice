package com.smartdevice.service.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import com.smartdevice.mapper.AppInfoMapper;
import com.smartdevice.model.AppInfo;
import com.smartdevice.service.AppInfoService;

@Service
public class AppInfoServiceImpl implements AppInfoService{

	private static Log log = LogFactory.getLog(AppInfoService.class);
	
	@Resource
	private AppInfoMapper appInfoMapper;
	
	public boolean addAppInfo(AppInfo appInfo) {
		log.info("AppInfoService impl in");
		appInfoMapper.addAppInfo(appInfo);
		log.info("Appinfo service impl success");;
		return true;
	}

	@Override
	public List<Map<String, Object>> listAppInfo() {
		log.info("list AppInfo in");
		return appInfoMapper.listAppInfo();
	}

}
