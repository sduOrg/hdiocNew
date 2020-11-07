#!/bin/bash
set -e
	
WAR_NAME="hdcgioc.jar"
WAR_FILE="/tmp/war/${WAR_NAME}"
WAR_DIR="/tmp/war"
TOMCAT_HOME="/opt/tomcat"
WAR_UNZIP_DIR="/tmp/war"
# properties路径
# /tmp/war/hdcgioc/BOOT-INF/classes/application.properties  

#custom
CHANGER_WAR_DIR="${WAR_UNZIP_DIR}/hdcgioc/BOOT-INF/classes"

#jdbc change config
function updateApplicationConfig(){
  if [ 0"$DATABASE_URL" = "0" ]; then
    echo "database address does not exist,error"
	DATABASE_URL="jdbc:postgresql://10.10.70.57:32139/hdcgioc"
  fi
  if [ 0"$DATABASE_USERNAME" = "0" ]; then
    echo "use default database user name"
	DATABASE_USERNAME="postgres"
  fi
  if [ 0"$DATABASE_PASSWORD" = "0" ]; then
    echo "use default database password"
	DATABASE_PASSWORD="postgres"
  fi
#spring.datasource.url=jdbc:postgresql://10.10.70.49/dataservice
#spring.datasource.username=serviceuser
#spring.datasource.password=serviceuser
  #jdbc.properties
  DB_URL="url=${DATABASE_URL}"
  DB_USERNAME="username=${DATABASE_USERNAME}"
  DB_PASSWORD="password=${DATABASE_PASSWORD}"
  sed -i "s|^spring\.datasource\.url=.*$|spring\.datasource\.url=${DATABASE_URL}|" $CHANGER_WAR_DIR/application.properties
  sed -i "s|^spring\.datasource\.username=.*$|spring\.datasource\.username=${DATABASE_USERNAME}|" $CHANGER_WAR_DIR/application.properties
  sed -i "s|^spring\.datasource\.password=.*$|spring\.datasource\.password=${DATABASE_PASSWORD}|" $CHANGER_WAR_DIR/application.properties
}

#function updateWarResouceXml(){
#
#}
function updateCasProperties(){
  if [ 0"$SERVICE_SECURITY" = "0" ]; then
    echo "use default SERVICE_SECURITY"
	SERVICE_SECURITY="http://10.10.70.58:32192/hdcgioc/login/cas"
  fi
  if [ 0"$SERVICE_HOME" = "0" ]; then
    echo "use default database SERVICE_HOME"
	SERVICE_HOME="http://10.10.70.58:32198"
  fi
  if [ 0"$SERVICE_LOGIN" = "0" ]; then
    echo "use default SERVICE_LOGIN"
	SERVICE_LOGIN="http://10.10.70.101:7002/cas/login"
  fi
  if [ 0"$SERVICE_LOGOUT" = "0" ]; then
    echo "use default database SERVICE_LOGOUT"
	SERVICE_LOGOUT="http://10.10.70.101:7002/cas/logout"
  fi
  if [ 0"$URL_PREFIX" = "0" ]; then
    echo "use default database URL_PREFIX"
	URL_PREFIX="http://10.10.70.101:7002/cas"
  fi
  echo $CHANGER_WAR_DIR 
  sed -i "s|^app\.service\.security=.*$|app\.service\.security=${SERVICE_SECURITY}|" $CHANGER_WAR_DIR/application.properties
  sed -i "s|^app\.service\.home=.*$|app\.service\.home=${SERVICE_HOME}|" $CHANGER_WAR_DIR/application.properties
  sed -i "s|^cas\.service\.login=.*$|cas\.service\.login=${SERVICE_LOGIN}|" $CHANGER_WAR_DIR/application.properties
  sed -i "s|^cas\.service\.logout=.*$|cas\.service\.logout=${SERVICE_LOGOUT}|" $CHANGER_WAR_DIR/application.properties
  sed -i "s|^cas\.url\.prefix=.*$|cas\.url\.prefix=${URL_PREFIX}|" $CHANGER_WAR_DIR/application.properties
}
if [  -f "$WAR_FILE" ]; then 
	echo "first startup, init war file..."
	cd $WAR_DIR
	mkdir hdcgioc
	mv hdcgioc.jar hdcgioc
	cd hdcgioc
	#jar xf $WAR_NAME
	#rm -rf $WAR_NAME
	# cd /tmp/war/hdcgioc/BOOT-INF/classes
	# 替换变量
	#updateCasProperties
	#updateApplicationConfig
	# jar cvf hdcgioc.jar ./ 打包的时候要使用-m参数指定清单文件，不然java命令启动jar包无法找到启动类
	#jar -cvfm0 hdcgioc.jar META-INF/MANIFEST.MF ./
	#mv hdcgioc.jar $WAR_DIR
	#cd $WAR_DIR
	#rm -rf hdcgioc/
	java -jar $WAR_NAME >hdcgioc.log
  
	#unzip war
    #cd $WAR_DIR
    # mkdir -p $WAR_UNZIP_DIR	
	# mv $WAR_NAME  $WAR_UNZIP_DIR	
	# cd  $WAR_UNZIP_DIR
	#java -jar /tmp/war/hdcgioc.jar
	# cat hdcgioc.log
	# jar -xvf $WAR_NAME
	# rm $WAR_NAME -f
    #updateApplicationConfig
	# cd /root
    # mv $WAR_UNZIP_DIR 	$TOMCAT_HOME/webapps/
	# rm $WAR_FILE -rf
	echo "first startup, init war finished"
fi
# echo "starting tomcat..."	
#start tomcat
# /usr/local/bin/starttomcat.sh
exec "$@"
