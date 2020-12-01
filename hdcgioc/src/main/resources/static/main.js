(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-layout>\n    <nz-header>\n      <div class=\"logo\">  <i nz-icon nzType=\"file\"></i>法律案件情况应用平台</div>\n      <ul nz-menu nzTheme=\"dark\" nzMode=\"horizontal\" class=\"header-menu\">\n      </ul>\n    </nz-header>\n    <nz-layout>\n      <nz-sider nzWidth=\"200px\" nzTheme=\"light\">\n        <ul nz-menu nzMode=\"inline\" class=\"sider-menu\">\n            <li nz-menu-item nzSelected  nzMatchRouter>\n                <a routerLink=\"/index\">\n                    <i nz-icon nzType=\"file\"></i>\n                    <span>总览</span>\n                </a>\n              </li>\n          <li nz-submenu nzOpen  [nzTitle]=\"titleTpl\">\n            <ng-template #titleTpl><i nz-icon nzType=\"file\"></i><span>案件分类</span></ng-template>\n            <ul>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/type\">刑法种类</a></li>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/sentence\">有期徒刑刑期分布</a></li>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/education\">文化程度</a></li>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/agecase\">年龄</a></li>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/province\">省份</a></li>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/period\">羁押周期</a></li>\n              <li nz-menu-item nzMatchRouter><a routerLink=\"/story\">法律情节</a></li>\n            </ul>\n          </li>\n        </ul>\n       \n      </nz-sider>\n      <nz-layout class=\"inner-layout\">\n        <!-- <nz-breadcrumb>\n          <nz-breadcrumb-item>Home</nz-breadcrumb-item>\n          <nz-breadcrumb-item>List</nz-breadcrumb-item>\n          <nz-breadcrumb-item>App</nz-breadcrumb-item>\n        </nz-breadcrumb> -->\n        <nz-content>\n            <router-outlet></router-outlet>\n        </nz-content>\n      </nz-layout>\n    </nz-layout>\n  </nz-layout>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/index/heroes/heroes.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/index/heroes/heroes.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-wraper\">\n    <div style=\"display: flex;justify-content: space-around;\"> \n        <div>\n          <h2 class=\"cont-title\">\n              各类刑罚的数量分布\n          </h2>\n          <div id=\"echart1\" style=\"    width: 360px;height: 233px;\"></div>\n        </div>\n        \n  \n        <div style=\"margin-left: 48px;\">\n          <h2 class=\"cont-title\">\n              类罪及其判决数量分布 \n          </h2>\n          <div id=\"echart2\" style=\"  width: 480px;height: 263px;\"></div>\n        </div>\n      </div>\n      <div style=\"display: flex;justify-content: space-around;\"> \n        <div>\n          <h2 class=\"cont-title\">\n              各类刑罚的年龄分布\n          </h2>\n          <div id=\"echart3\" style=\"    width: 360px;height: 263px;\"></div>\n        </div>\n  \n        <div style=\"margin-left: 48px;\">\n          <h2 class=\"cont-title\">\n              各类刑罚的文化程度分布\n          </h2>\n          <div id=\"echart4\" style=\"    width: 480px;height: 273px;\"></div>\n        </div>\n        </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/age-class/age-class.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/age-class/age-class.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wraper\">\n    <div class=\"screens\">\n\t\t    <div class=\"temp-kinds-main\">\n\t\t\t\t<div class=\"temp-kinds-title\">类罪名称:</div>\n              <ul class=\"temp-kinds-list\">\n                <li *ngFor=\"let item of classValueList;let i = index\" [ngClass]=\"{'active':i== selectTypeIndex}\" (click)=\"searchSelectType(i,item)\"\n                id=\"{{item.code}}\">{{item.value}}</li>\n              </ul>\n            </div>\n\n            <div class=\"temp-kinds-main\">\n              <div class=\"temp-kinds-title\">个罪名称:</div>\n                <ul class=\"temp-kinds-list\">\n                  <li *ngFor=\"let item of penaltyValueList;let i = index\" [ngClass]=\"{'active':i== selectPenaltyIndex}\" (click)=\"searchPenaltyType(i,item)\"\n                   id=\"{{item.code}}\">{{item.value}}</li>\n                </ul>\n            </div>\n            <div class=\"temp-kinds-main\">\n              <div class=\"temp-kinds-title\">筛选条件:</div>\n                <ul class=\"temp-kinds-list\">\n                  <li  style=\"cursor: default;\">{{selectTitle}}\n                  </li>\n                  <li *ngIf = \"!!selectPenaltyTitle\"  style=\"cursor: default;\">{{selectPenaltyTitle}}\n                    <i style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(1,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                   </li>\n                   <li *ngIf = \"!!age_rang\" style=\"cursor: default;\">{{age_rang}}\n                    <i  style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(2,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                   </li>\n                </ul>\n            </div>\n    </div>\n\n    <div>\n         <div style=\"display: flex;\">\n            <div class=\"age-chart-width\">\n                <h2 class=\"cont-title\">\n                    <span *ngIf=\"!selectPenaltyTitle\">类罪：{{selectTitle}} 分布</span>\n                    <span *ngIf=\"!!selectPenaltyTitle\">个罪：{{selectPenaltyTitle}} 分布</span>\n                </h2>\n                <div id=\"type-echart\" style=\"width: 90%;height: 260px;\"></div>\n            </div>\n         </div>\n    </div>\n    <div class=\"type-table\">\n        <h2 class=\"cont-title\">\n            类罪中的刑罚种类分布\n        </h2>\n        <nz-table #basicTable\n        [nzFrontPagination]=\"false\"\n        [nzData]=\"listOfData\"\n        [nzTotal]=\"total\"\n        [(nzPageIndex)]=\"pageIndex\"\n        (nzPageIndexChange)=\"searchPageIndexData($event)\"\n       >\n            <thead>\n              <tr>\n                <th>序号</th>\n                <th>案件编号</th>\n                <th nzWidth=\"80px\">姓名</th>\n                <th>罪刑类别</th>\n                <th>住址</th>\n                <th>检察单位</th>\n                <th>审理结果</th>\n                <th nzWidth=\"60px\">操作</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of basicTable.data;let i = index\">\n                <td>{{ i+1 }}</td>\n                <td>{{ data.case_no }}</td>\n                <td>{{ data.person_name }}</td>\n                <td>{{ data.penalty_name }}</td>\n                <td>{{ data.person_address }}</td>\n                <td>{{ data.public_prosecutor}}</td>\n                <td>{{ data.result_type }}</td>\n                <td>\n                  <!-- <a>Action 一 {{ data.name }}</a>\n                  <nz-divider nzType=\"vertical\"></nz-divider> -->\n                  <a (click)=\"gotoDetail(data)\">详情</a>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/detail/detail.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/detail/detail.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wrap\">\n    <div class=\"back\" (click)=\"goBack()\"><i nz-icon nzType=\"left\" nzTheme=\"outline\"></i>返回</div>\n    <div class=\"content\">\n        <div nz-row [nzGutter]=\"8\">\n          <div nz-col [nzSpan]=\"24\">\n            <nz-card nzTitle=\"案件基本情况\">\n              <div nz-row [nzGutter]=\"8\">\n                <div nz-col [nzSpan]=\"8\">\n                   <p>案件编号: {{itemDetail.case_no}}</p>\n                </div>\n                <div nz-col [nzSpan]=\"8\">\n                  <p>姓名: {{itemDetail.person_name}}</p>\n                </div>\n                <div nz-col [nzSpan]=\"8\">\n                  <p>年龄: {{itemDetail.person_age}}</p>\n                </div>\n              </div>\n\n              <div nz-row [nzGutter]=\"8\">\n                <div nz-col [nzSpan]=\"8\">\n                   <p>学历: {{itemDetail.person_edu}}</p>\n                </div>\n                <div nz-col [nzSpan]=\"8\">\n                  <p>从事职业: {{itemDetail.person_job}}</p>\n                </div>\n                <div nz-col [nzSpan]=\"8\">\n                  <p>居住地址: {{itemDetail.person_address}}</p>\n                </div>\n              </div>\n              \n              <div nz-row [nzGutter]=\"8\">\n                <div nz-col [nzSpan]=\"8\">\n                   <p>犯罪类型: {{itemDetail.penalty_name}}</p>\n                </div>\n                <div nz-col [nzSpan]=\"8\">\n                  <p>罪刑: {{itemDetail.penalty_prison_type}}</p>\n                </div>\n                <div nz-col [nzSpan]=\"8\">\n                  <p>刑期: {{itemDetail.penalty_prison_length}}月</p>\n                </div>\n              </div>\n                \n              <div nz-row [nzGutter]=\"8\">\n                <div nz-col [nzSpan]=\"8\">\n                   <p>检察单位: {{itemDetail.public_prosecutor}}</p>\n                </div>\n                <div nz-col [nzSpan]=\"8\">\n                  <p>案件结果: {{itemDetail.result_type}}</p>\n                </div>\n                <div nz-col [nzSpan]=\"8\">\n                  <p>检察日期: {{itemDetail.prosecutors_date}}</p>\n                </div>\n              </div>\n\n            </nz-card>\n          </div>\n        </div>\n        <div nz-row [nzGutter]=\"8\">\n            <div nz-col [nzSpan]=\"24\">\n              <nz-card nzTitle=\"案件内容\" style=\"margin-top: 12px;\">\n                <pre style=\"white-space: pre-wrap;\">{{itemDetail.case_content}}</pre>\n              </nz-card>\n            </div>\n          </div>\n      </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/education/education.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/education/education.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"container-wraper\">\n  <div class=\"screens\">\n      <div class=\"temp-kinds-main\">\n      <div class=\"temp-kinds-title\">类罪名称:</div>\n            <ul class=\"temp-kinds-list\">\n              <li *ngFor=\"let item of classValueList;let i = index\" [ngClass]=\"{'active':i== selectTypeIndex}\" (click)=\"searchSelectType(i,item)\"\n              id=\"{{item.code}}\">{{item.value}}</li>\n            </ul>\n          </div>\n\n          <div class=\"temp-kinds-main\">\n            <div class=\"temp-kinds-title\">个罪名称:</div>\n              <ul class=\"temp-kinds-list\">\n                <li *ngFor=\"let item of penaltyValueList;let i = index\" [ngClass]=\"{'active':i== selectPenaltyIndex}\" (click)=\"searchPenaltyType(i,item)\"\n                 id=\"{{item.code}}\">{{item.value}}</li>\n              </ul>\n          </div>\n          <div class=\"temp-kinds-main\">\n            <div class=\"temp-kinds-title\">筛选条件:</div>\n              <ul class=\"temp-kinds-list\">\n                <li  style=\"cursor: default;\">{{selectTitle}}\n                </li>\n                <li *ngIf = \"!!selectPenaltyTitle\"  style=\"cursor: default;\">{{selectPenaltyTitle}}\n                  <i style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(1,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                 </li>\n                 <li *ngIf = \"!!eduType\" style=\"cursor: default;\">{{eduType}}\n                  <i  style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(2,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                 </li>\n              </ul>\n          </div>\n  </div>\n\n  <div>\n       <div style=\"display: flex;\">\n          <div class=\"age-chart-width\">\n              <h2 class=\"cont-title\">\n                  <span *ngIf=\"!selectPenaltyTitle\">类罪：{{selectTitle}} 分布</span>\n                  <span *ngIf=\"!!selectPenaltyTitle\">个罪：{{selectPenaltyTitle}} 分布</span>\n              </h2>\n              <div id=\"type-echart\" style=\"width: 90%;height: 260px;\"></div>\n          </div>\n       </div>\n  </div>\n  <div class=\"type-table\">\n      <h2 class=\"cont-title\">\n          类罪中的刑罚种类分布\n      </h2>\n      <nz-table #basicTable\n      [nzFrontPagination]=\"false\"\n      [nzData]=\"listOfData\"\n      [nzTotal]=\"total\"\n      [(nzPageIndex)]=\"pageIndex\"\n      (nzPageIndexChange)=\"searchPageIndexData($event)\"\n     >\n          <thead>\n            <tr>\n              <th>序号</th>\n              <th>案件编号</th>\n              <th nzWidth=\"80px\">姓名</th>\n              <th>罪刑类别</th>\n              <th>住址</th>\n              <th>检察单位</th>\n              <th>审理结果</th>\n              <th nzWidth=\"60px\">操作</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of basicTable.data;let i = index\">\n              <td>{{ i+1 }}</td>\n              <td>{{ data.case_no }}</td>\n              <td>{{ data.person_name }}</td>\n              <td>{{ data.penalty_name }}</td>\n              <td>{{ data.person_address }}</td>\n              <td>{{ data.public_prosecutor}}</td>\n              <td>{{ data.result_type }}</td>\n              <td>\n                <!-- <a>Action 一 {{ data.name }}</a>\n                <nz-divider nzType=\"vertical\"></nz-divider> -->\n                <a (click)=\"gotoDetail(data)\">详情</a>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/law-story/law-story.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/law-story/law-story.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wraper\">\n    <div class=\"screens\">\n\t\t    <div class=\"temp-kinds-main\">\n\t\t\t\t<div class=\"temp-kinds-title\">类罪名称:</div>\n              <ul class=\"temp-kinds-list\">\n                <li *ngFor=\"let item of classValueList;let i = index\" [ngClass]=\"{'active':i== selectTypeIndex}\" (click)=\"searchSelectType(i,item)\"\n                id=\"{{item.code}}\">{{item.value}}</li>\n              </ul>\n            </div>\n\n            <div class=\"temp-kinds-main\">\n              <div class=\"temp-kinds-title\">个罪名称:</div>\n                <ul class=\"temp-kinds-list\">\n                  <li *ngFor=\"let item of penaltyValueList;let i = index\" [ngClass]=\"{'active':i== selectPenaltyIndex}\" (click)=\"searchPenaltyType(i,item)\"\n                   id=\"{{item.code}}\">{{item.value}}</li>\n                </ul>\n            </div>\n\n            <div class=\"temp-kinds-main\">\n                <div class=\"temp-kinds-title\">法定情节:</div>\n                      <ul class=\"temp-kinds-list\">\n                        <li *ngFor=\"let item of lawStoryList;let i = index\" [ngClass]=\"{'active':i== selectLawStoryIndex}\" (click)=\"searchLawStory(i,item)\"\n                        >{{item}}</li>\n                      </ul>\n            </div>\n\n            <div class=\"temp-kinds-main\">\n              <div class=\"temp-kinds-title\">筛选条件:</div>\n                <ul class=\"temp-kinds-list\">\n                  <li  style=\"cursor: default;\">{{selectTitle}}\n                  </li>\n                  <li *ngIf = \"!!selectPenaltyTitle\"  style=\"cursor: default;\">{{selectPenaltyTitle}}\n                    <i style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(1,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                   </li>\n                   <li *ngIf = \"!!selectPLawStoryTitle\" style=\"cursor: default;\">{{selectPLawStoryTitle}}\n                    <i  style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(2,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                   </li>\n                </ul>\n            </div>\n    </div>\n\n    <!-- <div>\n         <div style=\"display: flex;\">\n            <div class=\"age-chart-width\">\n                <h2 class=\"cont-title\">\n                    <span *ngIf=\"!selectPenaltyTitle\">类罪：{{selectTitle}} 分布</span>\n                    <span *ngIf=\"!!selectPenaltyTitle\">个罪：{{selectPenaltyTitle}} 分布</span>\n                </h2>\n                <div id=\"type-echart\" style=\"width: 90%;height: 260px;\"></div>\n            </div>\n         </div>\n    </div> -->\n    <div class=\"type-table\">\n        <h2 class=\"cont-title\">\n            类罪中的刑罚种类分布\n        </h2>\n        <nz-table #basicTable\n        [nzFrontPagination]=\"false\"\n        [nzData]=\"listOfData\"\n        [nzTotal]=\"total\"\n        [(nzPageIndex)]=\"pageIndex\"\n        (nzPageIndexChange)=\"searchPageIndexData($event)\"\n       >\n            <thead>\n              <tr>\n                <th>序号</th>\n                <th>案件编号</th>\n                <th nzWidth=\"80px\">姓名</th>\n                <th>罪刑类别</th>\n                <th>住址</th>\n                <th>检察单位</th>\n                <th>审理结果</th>\n                <th nzWidth=\"60px\">操作</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of basicTable.data;let i = index\">\n                <td>{{ i+1 }}</td>\n                <td>{{ data.case_no }}</td>\n                <td>{{ data.person_name }}</td>\n                <td>{{ data.penalty_name }}</td>\n                <td>{{ data.person_address }}</td>\n                <td>{{ data.public_prosecutor}}</td>\n                <td>{{ data.result_type }}</td>\n                <td>\n                  <!-- <a>Action 一 {{ data.name }}</a>\n                  <nz-divider nzType=\"vertical\"></nz-divider> -->\n                  <a (click)=\"gotoDetail(data)\">详情</a>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/period/period.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/period/period.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wraper\">\n    <div class=\"screens\">\n        <div class=\"temp-kinds-main\">\n        <div class=\"temp-kinds-title\">类罪名称:</div>\n              <ul class=\"temp-kinds-list\">\n                <li *ngFor=\"let item of classValueList;let i = index\" [ngClass]=\"{'active':i== selectTypeIndex}\" (click)=\"searchSelectType(i,item)\"\n                id=\"{{item.code}}\">{{item.value}}</li>\n              </ul>\n            </div>\n\n            <!-- <div class=\"temp-kinds-main\">\n              <div class=\"temp-kinds-title\">个罪名称:</div>\n                <ul class=\"temp-kinds-list\">\n                  <li *ngFor=\"let item of penaltyValueList;let i = index\" [ngClass]=\"{'active':i== selectPenaltyIndex}\" (click)=\"searchPenaltyType(i,item)\"\n                   id=\"{{item.code}}\">{{item.value}}</li>\n                </ul>\n            </div> -->\n            <div class=\"temp-kinds-main\">\n              <div class=\"temp-kinds-title\">筛选条件:</div>\n                <ul class=\"temp-kinds-list\">\n                  <li  style=\"cursor: default;\">{{selectTitle}}\n                  </li>\n                  <li *ngIf = \"!!selectPenaltyTitle\"  style=\"cursor: default;\">{{selectPenaltyTitle}}\n                    <i style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(1,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                   </li>\n                   <li *ngIf = \"!!lengthType\" style=\"cursor: default;\">{{lengthType}}\n                    <i  style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(2,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                   </li>\n                </ul>\n            </div>\n    </div>\n\n    <div>\n         <div style=\"display: flex;\">\n            <div class=\"age-chart-width\">\n                <h2 class=\"cont-title\">\n                    <span *ngIf=\"!selectPenaltyTitle\">类罪：{{selectTitle}} 分布</span>\n                    <span *ngIf=\"!!selectPenaltyTitle\">个罪：{{selectPenaltyTitle}} 分布</span>\n                </h2>\n                <div id=\"type-echart\" style=\"width: 90%;height: 260px;\"></div>\n            </div>\n         </div>\n    </div>\n    <div class=\"type-table\">\n        <h2 class=\"cont-title\">\n            类罪中的刑罚种类分布\n        </h2>\n        <nz-table #basicTable\n        [nzFrontPagination]=\"false\"\n        [nzData]=\"listOfData\"\n        [nzTotal]=\"total\"\n        [(nzPageIndex)]=\"pageIndex\"\n        (nzPageIndexChange)=\"searchPageIndexData($event)\"\n       >\n            <thead>\n              <tr>\n                <th>序号</th>\n                <th>案件编号</th>\n                <th nzWidth=\"80px\">姓名</th>\n                <th>罪刑类别</th>\n                <th>住址</th>\n                <th>检察单位</th>\n                <th>审理结果</th>\n                <th nzWidth=\"60px\">操作</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of basicTable.data;let i = index\">\n                <td>{{ i+1 }}</td>\n                <td>{{ data.case_no }}</td>\n                <td>{{ data.person_name }}</td>\n                <td>{{ data.penalty_name }}</td>\n                <td>{{ data.person_address }}</td>\n                <td>{{ data.public_prosecutor}}</td>\n                <td>{{ data.result_type }}</td>\n                <td>\n                  <!-- <a>Action 一 {{ data.name }}</a>\n                  <nz-divider nzType=\"vertical\"></nz-divider> -->\n                  <a (click)=\"gotoDetail(data)\">详情</a>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/province/province.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/province/province.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wraper\">\n  <div class=\"screens\">\n    <div class=\"temp-kinds-main\">\n      <div class=\"temp-kinds-title\">类型选择:</div>\n            <ul class=\"temp-kinds-list\">\n              <li *ngFor=\"let item of addressValueList;let i = index\" [ngClass]=\"{'active':i== selectAddressIndex}\" (click)=\"searchAddressType(i,item)\"\n              >{{item}}</li>\n            </ul>\n          </div>\n      <div class=\"temp-kinds-main\">\n      <div class=\"temp-kinds-title\">类罪名称:</div>\n            <ul class=\"temp-kinds-list\">\n              <li *ngFor=\"let item of classValueList;let i = index\" [ngClass]=\"{'active':i== selectTypeIndex}\" (click)=\"searchSelectType(i,item)\"\n              id=\"{{item.code}}\">{{item.value}}</li>\n            </ul>\n          </div>\n\n          <!-- <div class=\"temp-kinds-main\">\n            <div class=\"temp-kinds-title\">个罪名称:</div>\n              <ul class=\"temp-kinds-list\">\n                <li *ngFor=\"let item of penaltyValueList;let i = index\" [ngClass]=\"{'active':i== selectPenaltyIndex}\" (click)=\"searchPenaltyType(i,item)\"\n                 id=\"{{item.code}}\">{{item.value}}</li>\n              </ul>\n          </div> -->\n          <div class=\"temp-kinds-main\">\n            <div class=\"temp-kinds-title\">筛选条件:</div>\n              <ul class=\"temp-kinds-list\">\n                <li  style=\"cursor: default;\">{{selectTitle}}\n                </li>\n                <li *ngIf = \"!!selectPenaltyTitle\"  style=\"cursor: default;\">{{selectPenaltyTitle}}\n                  <i style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(1,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                 </li>\n                 <li *ngIf = \"!!addressType\" style=\"cursor: default;\">{{addressType}}\n                  <i  style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(2,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                 </li>\n                 <li *ngIf = \"!!residentType\" style=\"cursor: default;\">{{residentType}}\n                  <i  style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(2,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                 </li>\n              </ul>\n          </div>\n  </div>\n\n  <div>\n       <div style=\"display: flex;\">\n          <div class=\"age-chart-width\">\n              <h2 class=\"cont-title\">\n                  <span *ngIf=\"!selectPenaltyTitle\">类罪：{{selectTitle}} 分布</span>\n                  <span *ngIf=\"!!selectPenaltyTitle\">个罪：{{selectPenaltyTitle}} 分布</span>\n              </h2>\n              <div id=\"type-echart\" style=\"width: 100%;height: 260px;\"></div>\n          </div>\n       </div>\n  </div>\n  <div class=\"type-table\">\n      <h2 class=\"cont-title\">\n          类罪中的刑罚种类分布\n      </h2>\n      <nz-table #basicTable\n      [nzFrontPagination]=\"false\"\n      [nzData]=\"listOfData\"\n      [nzTotal]=\"total\"\n      [(nzPageIndex)]=\"pageIndex\"\n      (nzPageIndexChange)=\"searchPageIndexData($event)\"\n     >\n          <thead>\n            <tr>\n              <th>序号</th>\n              <th>案件编号</th>\n              <th nzWidth=\"80px\">姓名</th>\n              <th>罪刑类别</th>\n              <th>住址</th>\n              <th>检察单位</th>\n              <th>审理结果</th>\n              <th nzWidth=\"60px\">操作</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of basicTable.data;let i = index\">\n              <td>{{ i+1 }}</td>\n              <td>{{ data.case_no }}</td>\n              <td>{{ data.person_name }}</td>\n              <td>{{ data.penalty_name }}</td>\n              <td>{{ data.person_address }}</td>\n              <td>{{ data.public_prosecutor}}</td>\n              <td>{{ data.result_type }}</td>\n              <td>\n                <!-- <a>Action 一 {{ data.name }}</a>\n                <nz-divider nzType=\"vertical\"></nz-divider> -->\n                <a (click)=\"gotoDetail(data)\">详情</a>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/sentence/sentence.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/sentence/sentence.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-wraper\">\n  <div class=\"screens\">\n      <div class=\"temp-kinds-main\">\n      <div class=\"temp-kinds-title\">类罪名称:</div>\n            <ul class=\"temp-kinds-list\">\n              <li *ngFor=\"let item of classValueList;let i = index\" [ngClass]=\"{'active':i== selectTypeIndex}\" (click)=\"searchSelectType(i,item)\"\n              id=\"{{item.code}}\">{{item.value}}</li>\n            </ul>\n          </div>\n\n          <!-- <div class=\"temp-kinds-main\">\n            <div class=\"temp-kinds-title\">个罪名称:</div>\n              <ul class=\"temp-kinds-list\">\n                <li *ngFor=\"let item of penaltyValueList;let i = index\" [ngClass]=\"{'active':i== selectPenaltyIndex}\" (click)=\"searchPenaltyType(i,item)\"\n                 id=\"{{item.code}}\">{{item.value}}</li>\n              </ul>\n          </div> -->\n          <div class=\"temp-kinds-main\">\n            <div class=\"temp-kinds-title\">筛选条件:</div>\n              <ul class=\"temp-kinds-list\">\n                <li  style=\"cursor: default;\">{{selectTitle}}\n                </li>\n                <li *ngIf = \"!!selectPenaltyTitle\"  style=\"cursor: default;\">{{selectPenaltyTitle}}\n                  <i style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(1,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                 </li>\n                 <li *ngIf = \"!!lengthType\" style=\"cursor: default;\">{{lengthType}}\n                  <i  style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(2,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                 </li>\n              </ul>\n          </div>\n  </div>\n\n  <div>\n       <div style=\"display: flex;\">\n          <div class=\"age-chart-width\">\n              <h2 class=\"cont-title\">\n                  <span *ngIf=\"!selectPenaltyTitle\">类罪：{{selectTitle}} 分布</span>\n                  <span *ngIf=\"!!selectPenaltyTitle\">个罪：{{selectPenaltyTitle}} 分布</span>\n              </h2>\n              <div id=\"type-echart\" style=\"width: 90%;height: 260px;\"></div>\n          </div>\n       </div>\n  </div>\n  <div class=\"type-table\">\n      <h2 class=\"cont-title\">\n          类罪中的刑罚种类分布\n      </h2>\n      <nz-table #basicTable\n      [nzFrontPagination]=\"false\"\n      [nzData]=\"listOfData\"\n      [nzTotal]=\"total\"\n      [(nzPageIndex)]=\"pageIndex\"\n      (nzPageIndexChange)=\"searchPageIndexData($event)\"\n     >\n          <thead>\n            <tr>\n              <th>序号</th>\n              <th>案件编号</th>\n              <th nzWidth=\"80px\">姓名</th>\n              <th>罪刑类别</th>\n              <th>住址</th>\n              <th>检察单位</th>\n              <th>审理结果</th>\n              <th nzWidth=\"60px\">操作</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of basicTable.data;let i = index\">\n              <td>{{ i+1 }}</td>\n              <td>{{ data.case_no }}</td>\n              <td>{{ data.person_name }}</td>\n              <td>{{ data.penalty_name }}</td>\n              <td>{{ data.person_address }}</td>\n              <td>{{ data.public_prosecutor}}</td>\n              <td>{{ data.result_type }}</td>\n              <td>\n                <!-- <a>Action 一 {{ data.name }}</a>\n                <nz-divider nzType=\"vertical\"></nz-divider> -->\n                <a (click)=\"gotoDetail(data)\">详情</a>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/type-case/type-case.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/type-case/type-case.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"container-wraper\">\n  <div class=\"screens\">\n      <div class=\"temp-kinds-main\">\n      <div class=\"temp-kinds-title\">类罪名称:</div>\n            <ul class=\"temp-kinds-list\">\n              <li *ngFor=\"let item of classValueList;let i = index\" [ngClass]=\"{'active':i== selectTypeIndex}\" (click)=\"searchSelectType(i,item)\"\n              id=\"{{item.code}}\">{{item.value}}</li>\n            </ul>\n          </div>\n\n          <!-- <div class=\"temp-kinds-main\">\n            <div class=\"temp-kinds-title\">个罪名称:</div>\n              <ul class=\"temp-kinds-list\">\n                <li *ngFor=\"let item of penaltyValueList;let i = index\" [ngClass]=\"{'active':i== selectPenaltyIndex}\" (click)=\"searchPenaltyType(i,item)\"\n                 id=\"{{item.code}}\">{{item.value}}</li>\n              </ul>\n          </div> -->\n          <div class=\"temp-kinds-main\">\n            <div class=\"temp-kinds-title\">筛选条件:</div>\n              <ul class=\"temp-kinds-list\">\n                <li  style=\"cursor: default;\">{{selectTitle}}\n                </li>\n                <li *ngIf = \"!!selectPenaltyTitle\"  style=\"cursor: default;\">{{selectPenaltyTitle}}\n                  <i style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(1,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                 </li>\n                 <li *ngIf = \"!!eduType\" style=\"cursor: default;\">{{eduType}}\n                  <i  style=\"cursor: pointer;color: #1890ff;\" (click)=\"deleteFlagType(2,item)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n                 </li>\n              </ul>\n          </div>\n  </div>\n\n  <div>\n       <div style=\"display: flex;\">\n          <div class=\"age-chart-width\">\n              <h2 class=\"cont-title\">\n                  <span *ngIf=\"!selectPenaltyTitle\">类罪：{{selectTitle}} 分布</span>\n                  <span *ngIf=\"!!selectPenaltyTitle\">个罪：{{selectPenaltyTitle}} 分布</span>\n              </h2>\n              <div id=\"type-echart\" style=\"width: 90%;height: 260px;\"></div>\n          </div>\n       </div>\n  </div>\n  <div class=\"type-table\">\n      <h2 class=\"cont-title\">\n          类罪中的刑罚种类分布\n      </h2>\n      <nz-table #basicTable\n      [nzFrontPagination]=\"false\"\n      [nzData]=\"listOfData\"\n      [nzTotal]=\"total\"\n      [(nzPageIndex)]=\"pageIndex\"\n      (nzPageIndexChange)=\"searchPageIndexData($event)\"\n     >\n          <thead>\n            <tr>\n              <th>序号</th>\n              <th>案件编号</th>\n              <th nzWidth=\"80px\">姓名</th>\n              <th>罪刑类别</th>\n              <th>住址</th>\n              <th>检察单位</th>\n              <th>审理结果</th>\n              <th nzWidth=\"60px\">操作</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of basicTable.data;let i = index\">\n              <td>{{ i+1 }}</td>\n              <td>{{ data.case_no }}</td>\n              <td>{{ data.person_name }}</td>\n              <td>{{ data.penalty_name }}</td>\n              <td>{{ data.person_address }}</td>\n              <td>{{ data.public_prosecutor}}</td>\n              <td>{{ data.result_type }}</td>\n              <td>\n                <!-- <a>Action 一 {{ data.name }}</a>\n                <nz-divider nzType=\"vertical\"></nz-divider> -->\n                <a (click)=\"gotoDetail(data)\">详情</a>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_index_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/index/heroes/heroes.component */ "./src/app/page/index/heroes/heroes.component.ts");
/* harmony import */ var _page_law_age_class_age_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/law/age-class/age-class.component */ "./src/app/page/law/age-class/age-class.component.ts");
/* harmony import */ var _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/law/detail/detail.component */ "./src/app/page/law/detail/detail.component.ts");
/* harmony import */ var _page_law_education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/law/education/education.component */ "./src/app/page/law/education/education.component.ts");
/* harmony import */ var _page_law_law_story_law_story_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/law/law-story/law-story.component */ "./src/app/page/law/law-story/law-story.component.ts");
/* harmony import */ var _page_law_period_period_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/law/period/period.component */ "./src/app/page/law/period/period.component.ts");
/* harmony import */ var _page_law_province_province_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/law/province/province.component */ "./src/app/page/law/province/province.component.ts");
/* harmony import */ var _page_law_sentence_sentence_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/law/sentence/sentence.component */ "./src/app/page/law/sentence/sentence.component.ts");
/* harmony import */ var _page_law_type_case_type_case_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/law/type-case/type-case.component */ "./src/app/page/law/type-case/type-case.component.ts");

/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2020-08-21 10:50:08
 * @LastEditors: Seven
 * @LastEditTime: 2020-08-21 11:24:40
 */











const routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _page_index_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"] },
    { path: 'type', component: _page_law_type_case_type_case_component__WEBPACK_IMPORTED_MODULE_11__["TypeCaseComponent"] },
    { path: 'sentence', component: _page_law_sentence_sentence_component__WEBPACK_IMPORTED_MODULE_10__["SentenceComponent"] },
    { path: 'education', component: _page_law_education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"] },
    { path: 'agecase', component: _page_law_age_class_age_class_component__WEBPACK_IMPORTED_MODULE_4__["AgeClassComponent"] },
    { path: 'province', component: _page_law_province_province_component__WEBPACK_IMPORTED_MODULE_9__["ProvinceComponent"] },
    { path: 'period', component: _page_law_period_period_component__WEBPACK_IMPORTED_MODULE_8__["PeriodComponent"] },
    { path: 'story', component: _page_law_law_story_law_story_component__WEBPACK_IMPORTED_MODULE_7__["LawStoryComponent"] },
    { path: 'type/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'agecase/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'sentence/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'education/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'province/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'period/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'story/detail', component: _page_law_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  height: 31px;\n  line-height: 31px;\n  color: white;\n  margin: 16px 30px 16px 0;\n  float: left;\n  font-size: 18px;\n}\n\n.logo i {\n  margin-right: 12px;\n}\n\n.header-menu {\n  line-height: 64px;\n}\n\n.sider-menu {\n  height: 100%;\n  border-right: 0;\n}\n\n.inner-layout {\n  padding: 0 24px 24px;\n  margin-left: 200px;\n  margin-top: 64px;\n}\n\nnz-breadcrumb {\n  margin: 16px 0;\n}\n\nnz-content {\n  background: #fff;\n  min-height: 432px;\n}\n\n:host ::ng-deep .ant-layout-header {\n  padding-left: 24px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n}\n\n:host ::ng-deep .ant-layout-sider-light {\n  position: fixed;\n  top: 64px;\n  left: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcms0L2hkaW9jTmV3L2hkY2dpb2Mvc3JjL21haW4vbXktYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsd0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHRTtFQUNFLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0FDQUo7O0FER0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgLy8gd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMzFweDtcbiAgICBsaW5lLWhlaWdodDogMzFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8gYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIG1hcmdpbjogMTZweCAzMHB4IDE2cHggMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbi5sb2dvIGl7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4gIC5oZWFkZXItbWVudSB7XG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIH1cblxuICAuc2lkZXItbWVudSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgfVxuXG4gIC5pbm5lci1sYXlvdXQge1xuICAgIHBhZGRpbmc6IDAgMjRweCAyNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xuICB9XG5cbiAgbnotYnJlYWRjcnVtYiB7XG4gICAgbWFyZ2luOiAxNnB4IDA7XG4gIH1cblxuICBuei1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1pbi1oZWlnaHQ6IDQzMnB4O1xuICB9XG46aG9zdCA6Om5nLWRlZXB7XG4gIC5hbnQtbGF5b3V0LWhlYWRlcntcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIC5hbnQtbGF5b3V0LXNpZGVyLWxpZ2h0e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDY0cHg7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn0iLCIubG9nbyB7XG4gIGhlaWdodDogMzFweDtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxNnB4IDMwcHggMTZweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubG9nbyBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uaGVhZGVyLW1lbnUge1xuICBsaW5lLWhlaWdodDogNjRweDtcbn1cblxuLnNpZGVyLW1lbnUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cblxuLmlubmVyLWxheW91dCB7XG4gIHBhZGRpbmc6IDAgMjRweCAyNHB4O1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG59XG5cbm56LWJyZWFkY3J1bWIge1xuICBtYXJnaW46IDE2cHggMDtcbn1cblxubnotY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDQzMnB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFudC1sYXlvdXQtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtbGF5b3V0LXNpZGVyLWxpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDY0cHg7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'my-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_index_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/index/heroes/heroes.component */ "./src/app/page/index/heroes/heroes.component.ts");
/* harmony import */ var _drag_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drag.directive */ "./src/app/drag.directive.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _page_law_law_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/law/law.module */ "./src/app/page/law/law.module.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _page_index_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"],
            _drag_directive__WEBPACK_IMPORTED_MODULE_6__["DragDirective"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _page_law_law_module__WEBPACK_IMPORTED_MODULE_10__["LawModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/drag.directive.ts":
/*!***********************************!*\
  !*** ./src/app/drag.directive.ts ***!
  \***********************************/
/*! exports provided: DragDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDirective", function() { return DragDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2020-08-21 11:31:10
 * @LastEditors: Seven
 * @LastEditTime: 2020-10-22 10:23:41
 */

let DragDirective = class DragDirective {
    constructor(el) {
        this.el = el;
        this.isDown = false;
        this.totalOffsetX = 0; // 记录总偏移量 X轴
        this.totalOffsetY = 0; // 记录总偏移量 Y轴
    }
    // 点击事件
    onMousedown(event) {
        this.isDown = true;
        this.disX = event.pageX;
        this.disY = event.pageY;
        console.log("event.pageX", event.pageX, "event.pageY", event.pageY);
        console.log("event.clientX", event.clientX, "event.clientY", event.clientY);
    }
    // 监听document移动事件事件
    onMousemove(event) {
        // 判断该元素是否被点击了。
        if (this.isDown) {
            console.log("event2.clientX", event.clientX, "event2.clientY", event.clientY);
            console.log("event2.pageX", event.pageX, "event2.clientY", event.pageY);
            this.el.nativeElement.style.left = this.totalOffsetX + event.pageX - this.disX + 'px';
            this.el.nativeElement.style.top = this.totalOffsetY + event.pageY - this.disY + 'px';
        }
    }
    // 监听document离开事件
    onMouseup(event) {
        // 只用当元素移动过了，离开函数体才会触发。
        if (this.isDown) {
            console.log('fail');
            this.totalOffsetX += event.pageX - this.disX;
            this.totalOffsetY += event.pageY - this.disY;
            this.isDown = false;
            console.log("totalOffsetX", this.totalOffsetX, "totalOffsetY", this.totalOffsetY);
        }
    }
    ngOnInit() {
        this.el.nativeElement.style.position = 'relative';
    }
};
DragDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])
], DragDirective.prototype, "onMousedown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousemove', ['$event'])
], DragDirective.prototype, "onMousemove", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mouseup', ['$event'])
], DragDirective.prototype, "onMouseup", null);
DragDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDrag]'
    })
], DragDirective);



/***/ }),

/***/ "./src/app/page/index/heroes/heroes.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/page/index/heroes/heroes.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvaW5kZXgvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/page/index/heroes/heroes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/index/heroes/heroes.component.ts ***!
  \*******************************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _law_law_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../law/law.service */ "./src/app/page/law/law.service.ts");

/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2020-08-21 11:05:54
 * @LastEditors: Seven
 * @LastEditTime: 2020-09-29 17:15:15
 */


let HeroesComponent = class HeroesComponent {
    constructor(lawService) {
        this.lawService = lawService;
    }
    ngOnInit() {
        this.loadCateNumb();
        this.loadCategroyFault();
        this.loadAllage();
        this.loadAlledu();
    }
    loadCateNumb() {
        this.lawService.getPieloadCateNumb().subscribe(data => {
            var totals = 0;
            var names = [];
            var values = [];
            data.forEach(element => {
                totals += Number(element.number);
                values.push({
                    name: element.penalty_class,
                    value: Number(element.number)
                });
            });
            values.sort(function (a, b) { return b.value - a.value; });
            values.forEach(element => {
                names.push(element.name);
            });
            this.gettsbmOption(totals, names, values, 2);
        });
    }
    loadCategroyFault() {
        this.lawService.getPieCategroyFault().subscribe(data => {
            var totals = 0;
            var names = [];
            var values = [];
            data.forEach(element => {
                totals += Number(element.number);
                values.push({
                    name: element.name,
                    value: Number(element.number)
                });
            });
            values.sort(function (a, b) { return b.value - a.value; });
            values.forEach(element => {
                names.push(element.name);
            });
            this.gettsbmOption(totals, names, values, 1);
        });
    }
    loadAlledu() {
        this.lawService.getPieAllEduData().subscribe(data => {
            var totals = 0;
            var names = ["文盲", "半文盲", "小学", "初中", "高中", "高职", "中专", "大专", "本科", "硕士", "博士", "其他"];
            var values = [];
            var i = 0;
            data["records"].forEach(element => {
                names.forEach(ele => {
                    if (ele == element.person_edu_level) {
                        totals += Number(element.number);
                        values.push({
                            name: ele,
                            value: Number(element.number)
                        });
                    }
                });
            });
            values.sort(function (a, b) { return b.value - a.value; });
            names = [];
            values.forEach(element => {
                names.push(element.name);
            });
            this.gettsbmOption(totals, names, values, 4);
        });
    }
    loadAllage() {
        this.lawService.getPieAllAgeData().subscribe(data => {
            var totals = 0;
            var names = ["不满14周岁", "14-18周岁", "18-30周岁", "30-40周岁",
                "40-50周岁", "50-60周岁", "60-70周岁", "70-75周岁", "超过75周岁"];
            var values = [];
            var i = 0;
            data.records.forEach(element => {
                for (var key in element) {
                    if (key != "unkonwn") {
                        totals += Number(element[key]);
                        values.push({
                            name: names[i],
                            value: Number(element[key])
                        });
                        i++;
                    }
                }
            });
            values.sort(function (a, b) { return b.value - a.value; });
            names = [];
            values.forEach(element => {
                names.push(element.name);
            });
            this.gettsbmOption(totals, names, values, 3);
        });
    }
    gettsbmOption(totals, names, values, index) {
        // 总和
        var total = {
            value: totals,
            name: '案件数量'
        };
        var originalData = values;
        var myChartIndustryOption = echarts.init(document.getElementById('echart' + index));
        myChartIndustryOption.clear();
        var tsbmOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {d}%'
            },
            title: [{
                    text: total.value,
                    left: '20%',
                    top: '40%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#000',
                        fontWeight: 'normal',
                        fontSize: 20
                    }
                }, {
                    text: total.name,
                    left: '20%',
                    top: '50%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#000',
                        fontWeight: 'normal',
                        fontSize: 14
                    }
                }],
            color: ['#FFCB00', '#4988e6', '#c4e0f5', '#4be599', '#05c3fa', '#6bcd09'],
            legend: {
                type: 'scroll',
                icon: 'circle',
                itemWidth: 10,
                itemHeight: 10,
                x: 'left',
                y: 'center',
                left: '50%',
                orient: 'vertical',
                data: names,
                textStyle: {
                    color: ' #333',
                    fontSize: 12
                },
                tooltip: {
                    show: true,
                },
                formatter: function (name) {
                    var oa = originalData;
                    var num = totals;
                    for (var i = 0; i < oa.length; i++) {
                        if (name == oa[i].name) {
                            //    if(name.length > 5)
                            //      name = name.substr(0, 9) + '..';
                            var number = 0;
                            if (Math.round((oa[i].value / num * 10000)) / 100 != 0) {
                                number = Math.round((oa[i].value / num * 10000)) / 100;
                            }
                            else if (Math.round((oa[i].value / num * 100000)) / 1000 != 0) {
                                number = Math.round((oa[i].value / num * 100000)) / 1000;
                            }
                            else if (Math.round((oa[i].value / num * 1000000)) / 10000 != 0) {
                                number = Math.round((oa[i].value / num * 1000000)) / 10000;
                            }
                            else if (Math.round((oa[i].value / num * 10000000)) / 100000 != 0) {
                                number = Math.round((oa[i].value / num * 10000000)) / 100000;
                            }
                            return name + ' ' + oa[i].value + ' ' + number + '%';
                        }
                    }
                }
            },
            series: [{
                    hoverAnimation: false,
                    center: ["20%", "45%"],
                    radius: [53, 65],
                    name: 'pie',
                    type: 'pie',
                    // roseType: 'area',
                    selectedMode: 'single',
                    selectedOffset: 16,
                    clockwise: true,
                    startAngle: 90,
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 3,
                            borderColor: '#000',
                        },
                        emphasis: {
                            borderWidth: 0,
                            shadowBlur: 5,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.2)'
                        }
                    },
                    data: originalData
                }]
        };
        myChartIndustryOption.setOption(tsbmOption);
        window.onresize = function () {
            myChartIndustryOption.resize();
        };
    }
};
HeroesComponent.ctorParameters = () => [
    { type: _law_law_service__WEBPACK_IMPORTED_MODULE_2__["LawService"] }
];
HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heroes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heroes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/index/heroes/heroes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heroes.component.scss */ "./src/app/page/index/heroes/heroes.component.scss")).default]
    })
], HeroesComponent);



/***/ }),

/***/ "./src/app/page/law/age-class/age-class.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/page/law/age-class/age-class.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 150px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcms0L2hkaW9jTmV3L2hkY2dpb2Mvc3JjL21haW4vbXktYXBwL3NyYy9hcHAvcGFnZS9sYXcvYWdlLWNsYXNzL2FnZS1jbGFzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS9sYXcvYWdlLWNsYXNzL2FnZS1jbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURGQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9sYXcvYWdlLWNsYXNzL2FnZS1jbGFzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW5ze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cbi50ZW1wLWtpbmRzLW1haW57XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi50ZW1wLWtpbmRzLXRpdGxle1xuICAgIG1pbi13aWR0aDogNjBweDtcbn1cbi50ZW1wLWtpbmRzLWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLnRlbXAta2luZHMtbGlzdCBsaXtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMCA0cHggNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkuYWN0aXZle1xuICAgIGNvbG9yOiAgIzM4OTVGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuLmFnZS1jaGFydC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuIiwiLnNjcmVlbnMge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGVtcC1raW5kcy10aXRsZSB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRlbXAta2luZHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgNHB4IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmUge1xuICBjb2xvcjogIzM4OTVGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4OTVGRjtcbn1cblxuLmFnZS1jaGFydC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/law/age-class/age-class.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/law/age-class/age-class.component.ts ***!
  \***********************************************************/
/*! exports provided: AgeClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgeClassComponent", function() { return AgeClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let AgeClassComponent = class AgeClassComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.selectTagList = [];
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
    }
    ngOnInit() {
        this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getPenaltyClass().subscribe(data => {
            data.penalty_class.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            this.getPenaltyList(this.selectTitle);
            this.getWenshuByAge();
        });
    }
    getPenaltyList(classname) {
        this.penaltyValueList = [];
        this.lawSerivce.getPenaltyByClass(classname).subscribe(data => {
            data.penalty_definite.forEach((element, index) => {
                this.penaltyValueList.push({ code: String(index + 1), value: element });
            });
        });
    }
    getWenshuByAge() {
        this.lawSerivce.getWenshuByAge(this.selectTitle, this.selectPenaltyTitle, this.start_age, this.end_age, String(this.pageIndex)).subscribe(data => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach(element => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        this.start_age = null;
        this.end_age = null;
        this.age_rang = null;
        this.loadCateCharts();
        //点击类最加载个罪
        this.getPenaltyList(this.selectTitle);
        this.getWenshuByAge();
    }
    //点击个罪
    searchPenaltyType(index, item) {
        console.log("page", index);
        if (this.selectPenaltyIndex == index) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else {
            this.selectPenaltyIndex = index;
            this.selectPenaltyTitle = item.value;
        }
        this.loadCateCharts();
        this.getWenshuByAge();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            this.start_age = null;
            this.end_age = null;
            this.age_rang = null;
        }
        this.loadCateCharts();
        this.getWenshuByAge();
    }
    //加载柱状图
    loadCateCharts() {
        debugger;
        if (this.selectPenaltyIndex != null) { //判断是否点击了个罪
            this.lawSerivce.getPenaltyAgeList().subscribe(data => {
                data.forEach(element => {
                    if (element.penalty_class == this.selectTitle) {
                        // for (var key in element.age_num){
                        //     if (key != "unkown"){
                        //         yList.push(element.age_num[key]);
                        //     }
                        // }
                        element.penalty_definite_age.forEach(ele => {
                            if (ele.penalty_name_definite == this.selectPenaltyTitle) {
                                this.loadDataForChart(ele);
                            }
                        });
                    }
                });
            });
        }
        else {
            this.lawSerivce.getPenaltyAgeClass().subscribe(data => {
                data.forEach((element, index) => {
                    if (!!element.penalty_class && element.penalty_class == this.selectTitle) {
                        this.loadDataForChart(element.age_num);
                    }
                });
            });
        }
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByAge();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/agecase/detail"], {
            skipLocationChange: true,
            queryParams: {
                "item": JSON.stringify(item),
                "from": "/agecase"
            }
        });
    }
    echartsClick(index) {
        console.log("index", index);
        let nums = this.echartsXlist[index];
        this.age_rang = nums;
        var age_start = "0";
        var age_end = "120";
        if (nums.indexOf("-") != -1) {
            const arr = nums.split("-");
            age_start = arr[0];
            age_end = arr[1];
        }
        else {
            if (index == 0) {
                age_end = nums;
            }
            else {
                age_start = nums;
            }
        }
        this.start_age = age_start;
        this.end_age = age_end;
        this.getWenshuByAge();
        console.log("age_start", age_start, "age_end", age_end);
    }
    loadDataForChart(map) {
        var yList = [];
        var xList = ["<14", "14-18", "18-30", "30-40", "40-50", "50-60", "60-70", "70-75", ">75"];
        for (var key in map) {
            if (key != "unkown" && key != "unkonwn" && key != "penalty_name_definite") {
                yList.push(map[key]);
            }
        }
        this.echartsXlist = ["14", "14-18", "18-30", "30-40", "40-50", "50-60", "60-70", "70-75", "75"];
        console.log("xList", xList, "yList", yList);
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            grid: {
                top: '10%',
                right: '3%',
                left: '15%',
                bottom: '15%'
            },
            xAxis: [{
                    type: 'category',
                    name: '',
                    nameTextStyle: {
                        color: "#333"
                    },
                    data: xList,
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.52)'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        interval: 0,
                        color: '#000',
                        textStyle: {
                            fontSize: 11
                        },
                    },
                }],
            yAxis: [
                {
                    type: 'value',
                    name: '（个）',
                    nameTextStyle: {
                        color: "#333"
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: '#333',
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(196,224,245,1)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(196,224,245,1)'
                        }
                    }
                }
            ],
            series: [{
                    type: 'bar',
                    data: yList,
                    name: '数量',
                    barWidth: '16px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#4DDEFE' // 0% 处的颜色
                                }, {
                                    offset: 0.5,
                                    color: '#57FBFA' // 50% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#3D8BFF' // 100% 处的颜色
                                }], false),
                            barBorderRadius: [2, 2, 0.1, 0.1],
                            shadowColor: 'rgba(0,0,0,0)',
                            shadowBlur: 4,
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#111',
                                    fontSize: 14
                                }
                            },
                        }
                    },
                }]
        };
        var mychart1 = echarts.init(document.getElementById("type-echart"));
        mychart1.clear();
        mychart1.setOption(option);
        mychart1.getZr().on('click', params => {
            let pointInPixel = [params.offsetX, params.offsetY];
            console.log("params", params);
            if (mychart1.containPixel('grid', pointInPixel)) {
                let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0];
                console.log("xIndex", xIndex);
                this.echartsClick(xIndex);
            }
        });
        window.onresize = mychart1.resize();
    }
};
AgeClassComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AgeClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-age-class',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./age-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/age-class/age-class.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./age-class.component.scss */ "./src/app/page/law/age-class/age-class.component.scss")).default]
    })
], AgeClassComponent);



/***/ }),

/***/ "./src/app/page/law/detail/detail.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/page/law/detail/detail.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  position: absolute;\n  right: 16px;\n  top: 4px;\n  color: #1890ff;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.container-wrap {\n  position: relative;\n}\n\n.content {\n  padding: 8px;\n  padding-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcms0L2hkaW9jTmV3L2hkY2dpb2Mvc3JjL21haW4vbXktYXBwL3NyYy9hcHAvcGFnZS9sYXcvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS9sYXcvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFFSSxZQUFBO0VBQ0EsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvbGF3L2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgdG9wOiA0cHg7XG4gICAgY29sb3I6ICMxODkwZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWluZXItd3JhcHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGVudCB7XG4gICAgLy8gYmFja2dyb3VuZDogI0VDRUNFQztcbiAgICBwYWRkaW5nOjhweDtcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcbn0iLCIuYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIHRvcDogNHB4O1xuICBjb2xvcjogIzE4OTBmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jb250YWluZXItd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/page/law/detail/detail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/law/detail/detail.component.ts ***!
  \*****************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DetailComponent = class DetailComponent {
    constructor(acrouter, router, doc) {
        this.acrouter = acrouter;
        this.router = router;
        this.doc = doc;
    }
    ngAfterViewInit() {
        window.scroll(0, 0);
    }
    ngOnInit() {
        this.acrouter.queryParams.subscribe(params => {
            console.log("params222", params);
            this.backurl = params["from"];
            this.itemDetail = JSON.parse(params["item"]);
            console.log("this.itemDetail", this.itemDetail);
        });
    }
    goBack() {
        this.router.navigate([this.backurl]);
    }
};
DetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/detail/detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.component.scss */ "./src/app/page/law/detail/detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]))
], DetailComponent);



/***/ }),

/***/ "./src/app/page/law/education/education.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/page/law/education/education.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 200px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcms0L2hkaW9jTmV3L2hkY2dpb2Mvc3JjL21haW4vbXktYXBwL3NyYy9hcHAvcGFnZS9sYXcvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS9sYXcvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURGQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9sYXcvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW5ze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cbi50ZW1wLWtpbmRzLW1haW57XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi50ZW1wLWtpbmRzLXRpdGxle1xuICAgIG1pbi13aWR0aDogNjBweDtcbn1cbi50ZW1wLWtpbmRzLWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLnRlbXAta2luZHMtbGlzdCBsaXtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMCA0cHggNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkuYWN0aXZle1xuICAgIGNvbG9yOiAgIzM4OTVGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuLmFnZS1jaGFydC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuIiwiLnNjcmVlbnMge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGVtcC1raW5kcy10aXRsZSB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRlbXAta2luZHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgNHB4IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmUge1xuICBjb2xvcjogIzM4OTVGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4OTVGRjtcbn1cblxuLmFnZS1jaGFydC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/law/education/education.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/law/education/education.component.ts ***!
  \***********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let EducationComponent = class EducationComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
    }
    ngOnInit() {
        this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getPenaltyClass().subscribe((data) => {
            data.penalty_class.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            this.getPenaltyList(this.selectTitle);
            this.getWenshuByEdu();
        });
    }
    getPenaltyList(classname) {
        this.penaltyValueList = [];
        this.lawSerivce.getPenaltyByClass(classname).subscribe((data) => {
            data.penalty_definite.forEach((element, index) => {
                this.penaltyValueList.push({ code: String(index + 1), value: element });
            });
        });
    }
    getWenshuByEdu() {
        this.lawSerivce
            .getWenshuByEduOrType(this.selectTitle, this.selectPenaltyTitle, '', this.eduType, String(this.pageIndex))
            .subscribe((data) => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach((element) => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        this.eduType = null;
        this.loadCateCharts();
        //点击类最加载个罪
        this.getPenaltyList(this.selectTitle);
        debugger;
        this.getWenshuByEdu();
    }
    //点击个罪
    searchPenaltyType(index, item) {
        console.log("page", index);
        if (this.selectPenaltyIndex == index) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else {
            this.selectPenaltyIndex = index;
            this.selectPenaltyTitle = item.value;
        }
        this.loadCateCharts();
        this.getWenshuByEdu();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            this.eduType = null;
        }
        this.loadCateCharts();
        this.getWenshuByEdu();
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByEdu();
    }
    echartsClick(index) {
        console.log("index", index);
        let nums = this.echartsXlist[index];
        this.eduType = nums;
        this.getWenshuByEdu();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/education/detail"], {
            skipLocationChange: true,
            queryParams: {
                item: JSON.stringify(item),
                from: "/education",
            },
        });
    }
    loadCateCharts() {
        if (this.selectPenaltyIndex != null) { //判断是否点击了个罪
            this.lawSerivce.getPenaltyEduList().subscribe(data => {
                debugger;
                data.forEach(element => {
                    if (element.penalty_class == this.selectTitle) {
                        // for (var key in element.age_num){
                        //     if (key != "unkown"){
                        //         yList.push(element.age_num[key]);
                        //     }
                        // }
                        element.definite.forEach(ele => {
                            if (ele.name == this.selectPenaltyTitle) {
                                this.loadDataForChart(ele.edu);
                            }
                        });
                    }
                });
            });
        }
        else {
            this.lawSerivce.getPenaltyEduClass().subscribe((data) => {
                data.forEach((element, index) => {
                    if (!!element.penalty_class &&
                        element.penalty_class == this.selectTitle) {
                        this.loadDataForChart(element.edu);
                    }
                });
            });
        }
    }
    loadDataForChart(list) {
        var yList = [];
        var xList = [
            "文盲",
            "半文盲",
            "小学",
            "初中",
            "高中",
            "高职",
            "大专",
            "本科",
            "硕士",
            "博士",
        ];
        this.echartsXlist = xList;
        xList.forEach((item) => {
            var flag = 0;
            list.forEach((ele) => {
                if (item == ele.name) {
                    flag = 1;
                    yList.push(ele.number);
                }
            });
            console.log("flag", flag);
            if (flag == 0) { //补0
                yList.push(0);
            }
        });
        console.log("xList", xList, "yList", yList);
        var option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            grid: {
                top: "10%",
                right: "3%",
                left: "15%",
                bottom: "15%",
            },
            xAxis: [
                {
                    type: "category",
                    name: "",
                    nameTextStyle: {
                        color: "#333",
                    },
                    data: xList,
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.52)",
                        },
                    },
                    axisLabel: {
                        margin: 10,
                        interval: 0,
                        color: "#000",
                        textStyle: {
                            fontSize: 11,
                        },
                    },
                },
            ],
            yAxis: [
                {
                    type: "value",
                    name: "（个）",
                    nameTextStyle: {
                        color: "#333",
                    },
                    axisLabel: {
                        formatter: "{value}",
                        color: "#333",
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(196,224,245,1)",
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: "dashed",
                            color: "rgba(196,224,245,1)",
                        },
                    },
                },
            ],
            series: [
                {
                    type: "bar",
                    data: yList,
                    name: "数量",
                    barWidth: "16px",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "#4DDEFE",
                                },
                                {
                                    offset: 0.5,
                                    color: "#57FBFA",
                                },
                                {
                                    offset: 1,
                                    color: "#3D8BFF",
                                },
                            ], false),
                            barBorderRadius: [2, 2, 0.1, 0.1],
                            shadowColor: "rgba(0,0,0,0)",
                            shadowBlur: 4,
                            label: {
                                show: true,
                                position: "top",
                                textStyle: {
                                    //数值样式
                                    color: "#111",
                                    fontSize: 14,
                                },
                            },
                        },
                    },
                },
            ],
        };
        var mychart1 = echarts.init(document.getElementById("type-echart"));
        mychart1.clear();
        mychart1.setOption(option);
        mychart1.getZr().on("click", (params) => {
            let pointInPixel = [params.offsetX, params.offsetY];
            console.log("params", params);
            if (mychart1.containPixel("grid", pointInPixel)) {
                let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [
                    params.offsetX,
                    params.offsetY,
                ])[0];
                console.log("xIndex", xIndex);
                this.echartsClick(xIndex);
            }
        });
        window.onresize = mychart1.resize();
    }
};
EducationComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-education",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.scss */ "./src/app/page/law/education/education.component.scss")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/page/law/law-story/law-story.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/page/law/law-story/law-story.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 150px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcms0L2hkaW9jTmV3L2hkY2dpb2Mvc3JjL21haW4vbXktYXBwL3NyYy9hcHAvcGFnZS9sYXcvbGF3LXN0b3J5L2xhdy1zdG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS9sYXcvbGF3LXN0b3J5L2xhdy1zdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURGQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9sYXcvbGF3LXN0b3J5L2xhdy1zdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW5ze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cbi50ZW1wLWtpbmRzLW1haW57XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi50ZW1wLWtpbmRzLXRpdGxle1xuICAgIG1pbi13aWR0aDogNjBweDtcbn1cbi50ZW1wLWtpbmRzLWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLnRlbXAta2luZHMtbGlzdCBsaXtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMCA0cHggNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkuYWN0aXZle1xuICAgIGNvbG9yOiAgIzM4OTVGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuLmFnZS1jaGFydC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuIiwiLnNjcmVlbnMge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGVtcC1raW5kcy10aXRsZSB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRlbXAta2luZHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgNHB4IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmUge1xuICBjb2xvcjogIzM4OTVGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4OTVGRjtcbn1cblxuLmFnZS1jaGFydC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/law/law-story/law-story.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/law/law-story/law-story.component.ts ***!
  \***********************************************************/
/*! exports provided: LawStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawStoryComponent", function() { return LawStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




// declare var echarts
let LawStoryComponent = class LawStoryComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        this.lawStoryList = []; //法定情节
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.selectLawStoryIndex = null; //法定情节选择
        this.selectTagList = [];
        // start_age:string;
        // end_age:string;
        // age_rang:string;
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
    }
    ngOnInit() {
        this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getPenaltyClass().subscribe(data => {
            data.penalty_class.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            this.getPenaltyList(this.selectTitle);
            this.getLawStroyList();
            this.getWenshuByLawStory();
        });
    }
    getPenaltyList(classname) {
        this.penaltyValueList = [];
        this.lawSerivce.getPenaltyByClass(classname).subscribe(data => {
            data.penalty_definite.forEach((element, index) => {
                this.penaltyValueList.push({ code: String(index + 1), value: element });
            });
        });
    }
    getLawStroyList() {
        this.lawSerivce.getLawsStory().subscribe(data => {
            data.forEach(element => {
                if (element != null) {
                    this.lawStoryList.push(element);
                }
            });
        });
    }
    getWenshuByLawStory() {
        this.lawSerivce.getWenshuByStory(this.selectTitle, this.selectPenaltyTitle, this.selectPLawStoryTitle, String(this.pageIndex)).subscribe(data => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach(element => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        this.selectLawStoryIndex = null;
        this.selectPLawStoryTitle = null;
        // this.loadCateCharts();
        //点击类最加载个罪
        this.getPenaltyList(this.selectTitle);
        this.getWenshuByLawStory();
    }
    //点击个罪
    searchPenaltyType(index, item) {
        console.log("page", index);
        if (this.selectPenaltyIndex == index) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else {
            this.selectPenaltyIndex = index;
            this.selectPenaltyTitle = item.value;
        }
        // this.loadCateCharts();
        this.getWenshuByLawStory();
    }
    //点击法定情节
    searchLawStory(index, item) {
        if (this.selectLawStoryIndex == index) {
            this.selectLawStoryIndex = null;
            this.selectPLawStoryTitle = null;
        }
        else {
            this.selectLawStoryIndex = index;
            this.selectPLawStoryTitle = item;
        }
        // this.loadCateCharts();
        this.getWenshuByLawStory();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            this.selectLawStoryIndex = null;
            this.selectPLawStoryTitle = null;
        }
        this.loadCateCharts();
        this.getWenshuByLawStory();
    }
    //加载柱状图
    loadCateCharts() {
        debugger;
        if (this.selectPenaltyIndex != null) { //判断是否点击了个罪
            this.lawSerivce.getPenaltyAgeList().subscribe(data => {
                data.forEach(element => {
                    if (element.penalty_class == this.selectTitle) {
                        // for (var key in element.age_num){
                        //     if (key != "unkown"){
                        //         yList.push(element.age_num[key]);
                        //     }
                        // }
                        element.penalty_definite_age.forEach(ele => {
                            if (ele.penalty_name_definite == this.selectPenaltyTitle) {
                                this.loadDataForChart(ele);
                            }
                        });
                    }
                });
            });
        }
        else {
            this.lawSerivce.getPenaltyAgeClass().subscribe(data => {
                data.forEach((element, index) => {
                    if (!!element.penalty_class && element.penalty_class == this.selectTitle) {
                        this.loadDataForChart(element.age_num);
                    }
                });
            });
        }
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByLawStory();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/story/detail"], {
            skipLocationChange: true,
            queryParams: {
                "item": JSON.stringify(item),
                "from": "/story"
            }
        });
    }
    // private echartsClick(index:number){
    //   console.log("index",index);
    //   let nums:string = this.echartsXlist[index];
    //   this.age_rang = nums;
    //   var age_start = "0";
    //   var age_end = "120"
    //   if (nums.indexOf("-") != -1){
    //    const arr =  nums.split("-");
    //    age_start = arr[0];
    //    age_end = arr[1];
    //   }else{
    //     if (index == 0){
    //       age_end = nums;
    //     }else{
    //       age_start = nums;
    //     }
    //   }
    //   this.start_age = age_start;
    //   this.end_age = age_end;
    //   this.getWenshuByAge();
    //   console.log("age_start",age_start,"age_end",age_end);
    // }
    loadDataForChart(map) {
        //     var yList = [];
        //     var xList = ["<14","14-18","18-30","30-40","40-50","50-60","60-70","70-75",">75"]
        //            for (var key in map){
        //                if (key != "unkown" && key != "unkonwn" && key != "penalty_name_definite"){
        //                    yList.push(map[key]);
        //                }
        //     }
        //     this.echartsXlist  = ["14","14-18","18-30","30-40","40-50","50-60","60-70","70-75","75"];
        //     console.log("xList",xList,"yList",yList);
        //     var option = {
        //     tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'shadow'
        //     },
        //     // formatter: '{b0}<br />{a0}: {c0}亿元<br />{a1}: {c1}%'
        //     },
        //     grid: {
        //     top: '10%',
        //     right: '3%',
        //     left: '15%',
        //     bottom: '15%'
        //     },
        //     xAxis: [{
        //     type: 'category',
        //     name: '',
        //     nameTextStyle: {
        //         color: "#333"
        //     },
        //     data: xList,
        //     axisLine: {
        //         lineStyle: {
        //         color: 'rgba(255,255,255,0.52)'
        //         }
        //     },
        //     axisLabel: {
        //         margin: 10,
        //         interval:0,
        //         color: '#000',
        //         textStyle: {
        //         fontSize: 11
        //         },
        //     },
        //     }],
        //     yAxis: [
        //     {
        //         type: 'value',
        //         name: '（个）',
        //         nameTextStyle: {
        //         color: "#333"
        //         },
        //         axisLabel: {
        //         formatter: '{value}',
        //         color: '#333',
        //         },
        //         axisLine: {
        //         show: true,
        //         lineStyle: {
        //             color: 'rgba(196,224,245,1)'
        //         }
        //         },
        //         splitLine: {
        //         show: true,
        //         lineStyle: {
        //             type: 'dashed',
        //             color: 'rgba(196,224,245,1)'
        //         }
        //         }
        //     }],
        //     series: [{
        //     type: 'bar',
        //     data: yList,
        //     name: '数量',
        //     barWidth: '16px',
        //     itemStyle: {
        //         normal: {
        //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //             offset: 0,
        //             color: '#4DDEFE' // 0% 处的颜色
        //         }, {
        //             offset: 0.5,
        //             color: '#57FBFA' // 50% 处的颜色
        //         }, {
        //             offset: 1,
        //             color: '#3D8BFF' // 100% 处的颜色
        //         }], false),
        //         barBorderRadius: [2, 2, 0.1, 0.1],
        //         shadowColor: 'rgba(0,0,0,0)',
        //         shadowBlur: 4,
        //         label: {
        //             show: true, //开启显示
        //             position: 'top', //在上方显示
        //             textStyle: { //数值样式
        //             color: '#111',
        //             fontSize: 14
        //             }
        //         },
        //         }
        //     },
        //     }]
        // };
        //     var mychart1 = echarts.init(document.getElementById("type-echart"));
        //     mychart1.clear();
        //     mychart1.setOption(option);
        //     mychart1.getZr().on('click', params => {
        //       let pointInPixel = [params.offsetX, params.offsetY]
        //       console.log("params",params);
        //       if (mychart1.containPixel('grid', pointInPixel)) {
        //         let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
        //         console.log("xIndex",xIndex)
        //         this.echartsClick(xIndex);
        //       }
        //     })
        //     window.onresize = mychart1.resize();
    }
};
LawStoryComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LawStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-law-story',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./law-story.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/law-story/law-story.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./law-story.component.scss */ "./src/app/page/law/law-story/law-story.component.scss")).default]
    })
], LawStoryComponent);



/***/ }),

/***/ "./src/app/page/law/law.module.ts":
/*!****************************************!*\
  !*** ./src/app/page/law/law.module.ts ***!
  \****************************************/
/*! exports provided: LawModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawModule", function() { return LawModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _age_class_age_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./age-class/age-class.component */ "./src/app/page/law/age-class/age-class.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education/education.component */ "./src/app/page/law/education/education.component.ts");
/* harmony import */ var _province_province_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./province/province.component */ "./src/app/page/law/province/province.component.ts");
/* harmony import */ var _period_period_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./period/period.component */ "./src/app/page/law/period/period.component.ts");
/* harmony import */ var _sentence_sentence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sentence/sentence.component */ "./src/app/page/law/sentence/sentence.component.ts");
/* harmony import */ var _type_case_type_case_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./type-case/type-case.component */ "./src/app/page/law/type-case/type-case.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/page/law/detail/detail.component.ts");
/* harmony import */ var _law_story_law_story_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./law-story/law-story.component */ "./src/app/page/law/law-story/law-story.component.ts");












let LawModule = class LawModule {
};
LawModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _age_class_age_class_component__WEBPACK_IMPORTED_MODULE_3__["AgeClassComponent"],
            _education_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"],
            _province_province_component__WEBPACK_IMPORTED_MODULE_5__["ProvinceComponent"],
            _period_period_component__WEBPACK_IMPORTED_MODULE_6__["PeriodComponent"],
            _sentence_sentence_component__WEBPACK_IMPORTED_MODULE_7__["SentenceComponent"],
            _type_case_type_case_component__WEBPACK_IMPORTED_MODULE_8__["TypeCaseComponent"],
            _detail_detail_component__WEBPACK_IMPORTED_MODULE_10__["DetailComponent"],
            _law_story_law_story_component__WEBPACK_IMPORTED_MODULE_11__["LawStoryComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzTableModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzDividerModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"]
        ]
    })
], LawModule);



/***/ }),

/***/ "./src/app/page/law/law.service.ts":
/*!*****************************************!*\
  !*** ./src/app/page/law/law.service.ts ***!
  \*****************************************/
/*! exports provided: LawService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawService", function() { return LawService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let LawService = class LawService {
    constructor(http) {
        this.http = http;
        this.url = config;
    }
    getPieAllAgeData() {
        return this.http.get("assets/data/all_age.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    getPieAllEduData() {
        return this.http.get("assets/data/all_edu.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    getPieCategroyFault() {
        return this.http.get("assets/data/penalty_prison_type_num_0917.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    getPieloadCateNumb() {
        return this.http.get("assets/data/penalty_class_num.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最 刑法种类
    getTypeloadCateNumb() {
        return this.http.get("assets/data/penalty_prison_type_num_0913.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最 刑期分布
    getPenaltyLengthClass() {
        return this.http.get("assets/data/penalty_length_class_divide.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最文化程度分布
    getPenaltyEduClass() {
        return this.http.get("assets/data/penalty_edu_num_0913.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //个罪文化程度分布
    getPenaltyEduList() {
        return this.http.get("assets/data/penalty_definite_edu_num_0913.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最年龄分布
    getPenaltyAgeClass() {
        return this.http.get("assets/data/penalty_age_num_0913.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //个罪年龄分布
    getPenaltyAgeList() {
        return this.http.get("assets/data/penalty_class_definite_age_num_0913.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最发生省份分布
    getPenaltyAddress() {
        return this.http.get("assets/data/penalty_province_address.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最居住地省份分布
    getPenaltyResidence() {
        return this.http.get("assets/data/penalty_province_residence.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //类最羁押周期
    getTypePeriodLength() {
        return this.http.get("assets/data/decision_inter_month_divide.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //获取类最列表
    getPenaltyClass() {
        debugger;
        return this.http.get(this.url + "get_penalty_class").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    getLawsStory() {
        return this.http.get(this.url + "get_laws").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.laws));
    }
    getWenshuByStory(penalty_class, penalty_definite, laws, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        params.append("penalty_class", penalty_class);
        if (penalty_definite)
            params.append("penalty_definite", penalty_definite);
        if (laws)
            params.append("laws", laws);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "get_wenshu_laws", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
    // getPenaltyClass(){
    //   return this.http.get("assets/data/service/get_penalty_class.json").pipe(map((res:{"penalty_class":[string]})=>res))
    // }
    //获取类最对应的个罪
    getPenaltyByClass(penalty_class) {
        // return this.http.get("assets/data/service/get_penalty_byClass.json").pipe(map((res:{"penalty_definite":[string]})=>res))
        const param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("penalty_class", penalty_class);
        return this.http.get(this.url + "get_penalty_byClass", { params: param }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    //获取年龄对应的文书列表
    getWenshuByAge(penalty_class, penalty_definite, age_start, age_end, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        params.append("penalty_class", penalty_class);
        if (penalty_definite)
            params.append("penalty_definite", penalty_definite);
        if (age_start)
            params.append("age_start", age_start);
        if (age_end)
            params.append("age_end", age_end);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "get_wenshu_age", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
    //根据教育程度获取文书列表
    getWenshuByEduOrType(penalty_class, penalty_definite, prison_type, edu_level, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        params.append("penalty_class", penalty_class);
        if (penalty_definite)
            params.append("penalty_definite", penalty_definite);
        if (prison_type)
            params.append("prison_type", prison_type);
        if (edu_level)
            params.append("edu_level", edu_level);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "get_wenshu_prisonTypeEdu", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
    //刑期长度
    getWenshuPrisonLength(penalty_class, penalty_definite, length_start, length_end, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        params.append("penalty_class", penalty_class);
        if (penalty_definite)
            params.append("penalty_definite", penalty_definite);
        if (length_start)
            params.append("length_start", length_start);
        if (length_end)
            params.append("length_end", length_end);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "get_wenshuPrisonLength", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
    getWenshuProvince(penalty_class, penalty_definite, province_address, province_residence, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        params.append("penalty_class", penalty_class);
        if (penalty_definite)
            params.append("penalty_definite", penalty_definite);
        if (province_address)
            params.append("province_address", province_address);
        if (province_residence)
            params.append("province_residence", province_residence);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "get_wenshu_province", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
    //羁押周期文书
    getWenshuInterMonth(penalty_class, penalty_definite, start, end, page_no) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        let params = new URLSearchParams();
        params.append("penalty_class", penalty_class);
        if (penalty_definite)
            params.append("penalty_definite", penalty_definite);
        if (start)
            params.append("start", start);
        if (end)
            params.append("end", end);
        if (page_no)
            params.append("page_no", page_no);
        let body = params.toString();
        return this.http.post(this.url + "get_wenshuInterMonth", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
        // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
    }
    //获取类最对应的文书列表
    getWenshuByClass(className) {
        return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
};
LawService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LawService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], LawService);



/***/ }),

/***/ "./src/app/page/law/period/period.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/page/law/period/period.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 200px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcms0L2hkaW9jTmV3L2hkY2dpb2Mvc3JjL21haW4vbXktYXBwL3NyYy9hcHAvcGFnZS9sYXcvcGVyaW9kL3BlcmlvZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS9sYXcvcGVyaW9kL3BlcmlvZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURGQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9sYXcvcGVyaW9kL3BlcmlvZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW5ze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cbi50ZW1wLWtpbmRzLW1haW57XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi50ZW1wLWtpbmRzLXRpdGxle1xuICAgIG1pbi13aWR0aDogNjBweDtcbn1cbi50ZW1wLWtpbmRzLWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLnRlbXAta2luZHMtbGlzdCBsaXtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMCA0cHggNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkuYWN0aXZle1xuICAgIGNvbG9yOiAgIzM4OTVGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuLmFnZS1jaGFydC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuIiwiLnNjcmVlbnMge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGVtcC1raW5kcy10aXRsZSB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRlbXAta2luZHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgNHB4IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmUge1xuICBjb2xvcjogIzM4OTVGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4OTVGRjtcbn1cblxuLmFnZS1jaGFydC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/law/period/period.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/law/period/period.component.ts ***!
  \*****************************************************/
/*! exports provided: PeriodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodComponent", function() { return PeriodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let PeriodComponent = class PeriodComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
    }
    ngOnInit() {
        this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getPenaltyClass().subscribe((data) => {
            data.penalty_class.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            // this.getPenaltyList(this.selectTitle);
            this.getWenshuByType();
        });
    }
    getWenshuByType() {
        this.lawSerivce
            .getWenshuInterMonth(this.selectTitle, this.selectPenaltyTitle, this.startLength, this.endLength, String(this.pageIndex))
            .subscribe((data) => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach((element) => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        this.lengthType = null;
        this.startLength = null;
        this.endLength = null;
        this.loadCateCharts();
        //点击类最加载个罪
        debugger;
        this.getWenshuByType();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            this.lengthType = null;
            this.startLength = null;
            this.endLength = null;
        }
        this.loadCateCharts();
        this.getWenshuByType();
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByType();
    }
    echartsClick(index) {
        console.log("index", index);
        let nums = this.echartsXlist[index];
        this.lengthType = nums;
        var age_start = "0";
        var age_end = "120";
        if (nums.indexOf("-") != -1) {
            const arr = nums.split("-");
            age_start = arr[0];
            age_end = arr[1];
        }
        else {
            if (index == 0) {
                age_end = nums;
            }
            else {
                age_start = nums;
            }
        }
        this.startLength = age_start;
        this.endLength = age_end;
        this.getWenshuByType();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/period/detail"], {
            skipLocationChange: true,
            queryParams: {
                "item": JSON.stringify(item),
                "from": "/period"
            }
        });
    }
    loadCateCharts() {
        this.lawSerivce.getTypePeriodLength().subscribe(data => {
            data["RECORDS"].forEach((element, index) => {
                if (!!element.penalty_class && element.penalty_class == this.selectTitle) {
                    this.loadDataForChart(element, index);
                }
            });
        });
    }
    loadDataForChart(element, index) {
        var yList = [];
        var xList = ["0-3", "3-6", "6-12", "12-18", "18-24", "24-30", "30-36", ">36"];
        this.echartsXlist = ["0-3", "3-6", "6-12", "12-18", "18-24", "24-30", "30-36", "36"];
        for (var key in element) {
            if (key != "unkown" && key != "unkonwn" && key != "penalty_class") {
                yList.push(element[key]);
            }
        }
        console.log("xList", xList, "yList", yList);
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            grid: {
                top: '10%',
                right: '3%',
                left: '15%',
                bottom: '15%'
            },
            xAxis: [{
                    type: 'category',
                    name: '',
                    nameTextStyle: {
                        color: "#333"
                    },
                    data: xList,
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.52)'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        interval: 0,
                        color: '#000',
                        textStyle: {
                            fontSize: 11
                        },
                    },
                }],
            yAxis: [
                {
                    type: 'value',
                    name: '（个）',
                    nameTextStyle: {
                        color: "#333"
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: '#333',
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(196,224,245,1)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(196,224,245,1)'
                        }
                    }
                }
            ],
            series: [{
                    type: 'bar',
                    data: yList,
                    name: '数量',
                    barWidth: '16px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#4DDEFE' // 0% 处的颜色
                                }, {
                                    offset: 0.5,
                                    color: '#57FBFA' // 50% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#3D8BFF' // 100% 处的颜色
                                }], false),
                            barBorderRadius: [2, 2, 0.1, 0.1],
                            shadowColor: 'rgba(0,0,0,0)',
                            shadowBlur: 4,
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#111',
                                    fontSize: 14
                                }
                            },
                        }
                    },
                }]
        };
        var mychart1 = echarts.init(document.getElementById("type-echart"));
        mychart1.clear();
        mychart1.setOption(option);
        mychart1.getZr().on('click', params => {
            let pointInPixel = [params.offsetX, params.offsetY];
            console.log("params", params);
            if (mychart1.containPixel('grid', pointInPixel)) {
                let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0];
                console.log("xIndex", xIndex);
                this.echartsClick(xIndex);
            }
        });
        window.onresize = mychart1.resize();
    }
};
PeriodComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PeriodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-period',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./period.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/period/period.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./period.component.scss */ "./src/app/page/law/period/period.component.scss")).default]
    })
], PeriodComponent);



/***/ }),

/***/ "./src/app/page/law/province/province.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/page/law/province/province.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 200px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcms0L2hkaW9jTmV3L2hkY2dpb2Mvc3JjL21haW4vbXktYXBwL3NyYy9hcHAvcGFnZS9sYXcvcHJvdmluY2UvcHJvdmluY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2UvbGF3L3Byb3ZpbmNlL3Byb3ZpbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREZBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2xhdy9wcm92aW5jZS9wcm92aW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW5ze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cbi50ZW1wLWtpbmRzLW1haW57XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi50ZW1wLWtpbmRzLXRpdGxle1xuICAgIG1pbi13aWR0aDogNjBweDtcbn1cbi50ZW1wLWtpbmRzLWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLnRlbXAta2luZHMtbGlzdCBsaXtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMCA0cHggNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkuYWN0aXZle1xuICAgIGNvbG9yOiAgIzM4OTVGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuLmFnZS1jaGFydC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuIiwiLnNjcmVlbnMge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGVtcC1raW5kcy10aXRsZSB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRlbXAta2luZHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgNHB4IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmUge1xuICBjb2xvcjogIzM4OTVGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4OTVGRjtcbn1cblxuLmFnZS1jaGFydC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/law/province/province.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/law/province/province.component.ts ***!
  \*********************************************************/
/*! exports provided: ProvinceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvinceComponent", function() { return ProvinceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let ProvinceComponent = class ProvinceComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.selectAddressIndex = 0;
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
        this.addressValueList = ["发生地", "居住地"];
    }
    ngOnInit() {
        this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getPenaltyClass().subscribe((data) => {
            data.penalty_class.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            // this.getPenaltyList(this.selectTitle);
            this.getWenshuByType();
        });
    }
    getWenshuByType() {
        this.lawSerivce
            .getWenshuProvince(this.selectTitle, this.selectPenaltyTitle, this.addressType, this.residentType, String(this.pageIndex))
            .subscribe((data) => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach((element) => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击切换居住地
    searchAddressType(index, item) {
        this.selectAddressIndex = index;
        // if (index == 0){
        //   this.
        // }else{
        // }
        this.addressType = null;
        this.residentType = null;
        this.loadCateCharts();
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        this.loadCateCharts();
        //点击类最加载个罪
        debugger;
        this.getWenshuByType();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            // this.eduType = null;
            this.addressType = null;
            this.residentType = null;
        }
        this.loadCateCharts();
        this.getWenshuByType();
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByType();
    }
    echartsClick(index) {
        console.log("index", index);
        let nums = this.echartsXlist[index];
        if (this.selectAddressIndex == 0) {
            this.addressType = nums;
            this.residentType = null;
        }
        else {
            this.residentType = nums;
            this.addressType = null;
        }
        this.getWenshuByType();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/province/detail"], {
            skipLocationChange: true,
            queryParams: {
                "item": JSON.stringify(item),
                "from": "/province"
            }
        });
    }
    loadCateCharts() {
        if (this.selectAddressIndex == 0) {
            this.lawSerivce.getPenaltyAddress().subscribe(data => {
                data.forEach((element, index) => {
                    if (!!element.penalty_class && element.penalty_class == this.selectTitle) {
                        this.loadDataForChart(element.province_address);
                    }
                });
            });
        }
        else {
            this.lawSerivce.getPenaltyResidence().subscribe(data => {
                data.forEach((element, index) => {
                    if (!!element.penalty_class && element.penalty_class == this.selectTitle) {
                        this.loadDataForChart(element.province_residence);
                    }
                });
            });
        }
    }
    loadDataForChart(list) {
        var xList = [];
        var yList = [];
        list.forEach(element => {
            if (!!element.name) {
                xList.push(element.name);
                yList.push(element.number);
            }
        });
        this.echartsXlist = xList;
        console.log("xList", xList, "yList", yList);
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            grid: {
                top: '10%',
                right: '3%',
                left: '8%',
                bottom: '15%'
            },
            xAxis: [{
                    type: 'category',
                    name: '',
                    nameTextStyle: {
                        color: "#333"
                    },
                    data: xList,
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.52)'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        interval: 0,
                        color: '#000',
                        textStyle: {
                            fontSize: 11
                        },
                    },
                }],
            yAxis: [
                {
                    type: 'value',
                    name: '（个）',
                    nameTextStyle: {
                        color: "#333"
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: '#333',
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(196,224,245,1)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(196,224,245,1)'
                        }
                    }
                }
            ],
            series: [{
                    type: 'bar',
                    data: yList,
                    name: '数量',
                    barWidth: '16px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#4DDEFE' // 0% 处的颜色
                                }, {
                                    offset: 0.5,
                                    color: '#57FBFA' // 50% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#3D8BFF' // 100% 处的颜色
                                }], false),
                            barBorderRadius: [2, 2, 0.1, 0.1],
                            shadowColor: 'rgba(0,0,0,0)',
                            shadowBlur: 4,
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#111',
                                    fontSize: 12
                                }
                            },
                        }
                    },
                }]
        };
        var mychart1 = echarts.init(document.getElementById("type-echart"));
        mychart1.clear();
        mychart1.setOption(option);
        mychart1.getZr().on('click', params => {
            let pointInPixel = [params.offsetX, params.offsetY];
            console.log("params", params);
            if (mychart1.containPixel('grid', pointInPixel)) {
                let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0];
                console.log("xIndex", xIndex);
                this.echartsClick(xIndex);
            }
        });
        window.onresize = mychart1.resize();
    }
};
ProvinceComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProvinceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-province',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./province.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/province/province.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./province.component.scss */ "./src/app/page/law/province/province.component.scss")).default]
    })
], ProvinceComponent);



/***/ }),

/***/ "./src/app/page/law/sentence/sentence.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/page/law/sentence/sentence.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 200px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcms0L2hkaW9jTmV3L2hkY2dpb2Mvc3JjL21haW4vbXktYXBwL3NyYy9hcHAvcGFnZS9sYXcvc2VudGVuY2Uvc2VudGVuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2UvbGF3L3NlbnRlbmNlL3NlbnRlbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREZBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2xhdy9zZW50ZW5jZS9zZW50ZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW5ze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cbi50ZW1wLWtpbmRzLW1haW57XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi50ZW1wLWtpbmRzLXRpdGxle1xuICAgIG1pbi13aWR0aDogNjBweDtcbn1cbi50ZW1wLWtpbmRzLWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLnRlbXAta2luZHMtbGlzdCBsaXtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMCA0cHggNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkuYWN0aXZle1xuICAgIGNvbG9yOiAgIzM4OTVGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuLmFnZS1jaGFydC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuIiwiLnNjcmVlbnMge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGVtcC1raW5kcy10aXRsZSB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRlbXAta2luZHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgNHB4IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmUge1xuICBjb2xvcjogIzM4OTVGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4OTVGRjtcbn1cblxuLmFnZS1jaGFydC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/law/sentence/sentence.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/law/sentence/sentence.component.ts ***!
  \*********************************************************/
/*! exports provided: SentenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentenceComponent", function() { return SentenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let SentenceComponent = class SentenceComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
    }
    ngOnInit() {
        this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getPenaltyClass().subscribe((data) => {
            data.penalty_class.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            // this.getPenaltyList(this.selectTitle);
            this.getWenshuByType();
        });
    }
    getWenshuByType() {
        this.lawSerivce
            .getWenshuPrisonLength(this.selectTitle, this.selectPenaltyTitle, this.startLength, this.endLength, String(this.pageIndex))
            .subscribe((data) => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach((element) => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        this.lengthType = null;
        this.startLength = null;
        this.endLength = null;
        this.loadCateCharts();
        //点击类最加载个罪
        debugger;
        this.getWenshuByType();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            this.lengthType = null;
            this.startLength = null;
            this.endLength = null;
        }
        this.loadCateCharts();
        this.getWenshuByType();
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByType();
    }
    echartsClick(index) {
        console.log("index", index);
        let nums = this.echartsXlist[index];
        this.lengthType = nums;
        var age_start = "0";
        var age_end = "120";
        if (nums.indexOf("-") != -1) {
            const arr = nums.split("-");
            age_start = arr[0];
            age_end = arr[1];
        }
        else {
            if (index == 0) {
                age_end = nums;
            }
            else {
                age_start = nums;
            }
        }
        this.startLength = age_start;
        this.endLength = age_end;
        this.getWenshuByType();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/sentence/detail"], {
            skipLocationChange: true,
            queryParams: {
                "item": JSON.stringify(item),
                "from": "/sentence"
            }
        });
    }
    loadCateCharts() {
        this.lawSerivce.getPenaltyLengthClass().subscribe(data => {
            data["records"].forEach((element, index) => {
                if (!!element.penalty_class && element.penalty_class == this.selectTitle) {
                    this.loadDataForChart(element, index);
                }
            });
        });
    }
    loadDataForChart(element, index) {
        var yList = [];
        var xList = ["<=1", "2-3", "4-6", "6-9", "10-12", "13-15", "16-20"];
        this.echartsXlist = ["1", "2-3", "4-6", "6-9", "10-12", "13-15", "16-20"];
        for (var key in element) {
            if (key != "unkown" && key != "penalty_class") {
                yList.push(element[key]);
            }
        }
        console.log("xList", xList, "yList", yList);
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            grid: {
                top: '10%',
                right: '3%',
                left: '15%',
                bottom: '15%'
            },
            xAxis: [{
                    type: 'category',
                    name: '',
                    nameTextStyle: {
                        color: "#333"
                    },
                    data: xList,
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.52)'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        interval: 0,
                        color: '#000',
                        textStyle: {
                            fontSize: 11
                        },
                    },
                }],
            yAxis: [
                {
                    type: 'value',
                    name: '（个）',
                    nameTextStyle: {
                        color: "#333"
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: '#333',
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(196,224,245,1)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(196,224,245,1)'
                        }
                    }
                }
            ],
            series: [{
                    type: 'bar',
                    data: yList,
                    name: '数量',
                    barWidth: '16px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#4DDEFE' // 0% 处的颜色
                                }, {
                                    offset: 0.5,
                                    color: '#57FBFA' // 50% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#3D8BFF' // 100% 处的颜色
                                }], false),
                            barBorderRadius: [2, 2, 0.1, 0.1],
                            shadowColor: 'rgba(0,0,0,0)',
                            shadowBlur: 4,
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#111',
                                    fontSize: 14
                                }
                            },
                        }
                    },
                }]
        };
        var mychart1 = echarts.init(document.getElementById("type-echart"));
        mychart1.clear();
        mychart1.setOption(option);
        mychart1.getZr().on('click', params => {
            let pointInPixel = [params.offsetX, params.offsetY];
            console.log("params", params);
            if (mychart1.containPixel('grid', pointInPixel)) {
                let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0];
                console.log("xIndex", xIndex);
                this.echartsClick(xIndex);
            }
        });
        window.onresize = mychart1.resize();
    }
};
SentenceComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SentenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sentence',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sentence.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/sentence/sentence.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sentence.component.scss */ "./src/app/page/law/sentence/sentence.component.scss")).default]
    })
], SentenceComponent);



/***/ }),

/***/ "./src/app/page/law/type-case/type-case.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/page/law/type-case/type-case.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screens {\n  border-bottom: 1px dashed #ccc;\n}\n\n.temp-kinds-main {\n  display: flex;\n}\n\n.temp-kinds-title {\n  min-width: 60px;\n}\n\n.temp-kinds-list {\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n  flex-flow: row wrap;\n  max-height: 200px;\n  overflow: auto;\n}\n\n.temp-kinds-list li {\n  padding-left: 8px;\n  padding-right: 8px;\n  cursor: pointer;\n  margin: 0 4px 6px;\n  border: 1px solid #ccc;\n}\n\n.temp-kinds-list li.active {\n  color: #3895FF;\n  border: 1px solid #3895FF;\n}\n\n.age-chart-width {\n  width: 100%;\n  margin-top: 24px;\n  border-bottom: 1px dashed #ccc;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcms0L2hkaW9jTmV3L2hkY2dpb2Mvc3JjL21haW4vbXktYXBwL3NyYy9hcHAvcGFnZS9sYXcvdHlwZS1jYXNlL3R5cGUtY2FzZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS9sYXcvdHlwZS1jYXNlL3R5cGUtY2FzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURGQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9sYXcvdHlwZS1jYXNlL3R5cGUtY2FzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW5ze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbn1cbi50ZW1wLWtpbmRzLW1haW57XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi50ZW1wLWtpbmRzLXRpdGxle1xuICAgIG1pbi13aWR0aDogNjBweDtcbn1cbi50ZW1wLWtpbmRzLWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLnRlbXAta2luZHMtbGlzdCBsaXtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMCA0cHggNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLWxpc3QgbGkuYWN0aXZle1xuICAgIGNvbG9yOiAgIzM4OTVGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg5NUZGO1xufVxuLmFnZS1jaGFydC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuIiwiLnNjcmVlbnMge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG59XG5cbi50ZW1wLWtpbmRzLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGVtcC1raW5kcy10aXRsZSB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRlbXAta2luZHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGVtcC1raW5kcy1saXN0IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgNHB4IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRlbXAta2luZHMtbGlzdCBsaS5hY3RpdmUge1xuICBjb2xvcjogIzM4OTVGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4OTVGRjtcbn1cblxuLmFnZS1jaGFydC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/law/type-case/type-case.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/law/type-case/type-case.component.ts ***!
  \***********************************************************/
/*! exports provided: TypeCaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeCaseComponent", function() { return TypeCaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../law.service */ "./src/app/page/law/law.service.ts");




let TypeCaseComponent = class TypeCaseComponent {
    constructor(lawSerivce, router) {
        this.lawSerivce = lawSerivce;
        this.router = router;
        this.classValueList = []; //类最
        this.penaltyValueList = []; //个罪
        this.selectTypeIndex = 0; //类最选择
        this.selectPenaltyIndex = null; //个罪选择
        this.pageIndex = 1;
        this.total = 100;
        this.listOfData = [];
        this.echartsXlist = [];
    }
    ngOnInit() {
        this.getClassList();
    }
    getClassList() {
        this.lawSerivce.getPenaltyClass().subscribe((data) => {
            data.penalty_class.forEach((element, index) => {
                if (element != "null" && element != null) {
                    this.classValueList.push({ code: String(index + 1), value: element });
                }
            });
            this.selectTitle = this.classValueList[this.selectTypeIndex].value;
            this.loadCateCharts();
            // this.getPenaltyList(this.selectTitle);
            this.getWenshuByType();
        });
    }
    getWenshuByType() {
        this.lawSerivce
            .getWenshuByEduOrType(this.selectTitle, this.selectPenaltyTitle, this.eduType, '', String(this.pageIndex))
            .subscribe((data) => {
            this.total = data.count;
            var list = [];
            data.wenshu_list.forEach((element) => {
                list.push(element);
            });
            this.listOfData = list;
            console.log("listOfData", this.listOfData);
        });
    }
    //点击的类最
    searchSelectType(index, item) {
        this.selectTypeIndex = index;
        this.selectTitle = item.value;
        //类最切换 条件情况
        this.selectPenaltyIndex = null;
        this.selectPenaltyTitle = null;
        this.eduType = null;
        this.loadCateCharts();
        //点击类最加载个罪
        debugger;
        this.getWenshuByType();
    }
    //删除选择条件
    deleteFlagType(index, item) {
        if (index == 1) {
            this.selectPenaltyIndex = null;
            this.selectPenaltyTitle = null;
        }
        else if (index == 2) {
            this.eduType = null;
        }
        this.loadCateCharts();
        this.getWenshuByType();
    }
    //控制翻页
    searchPageIndexData(index) {
        console.log("page", index);
        this.pageIndex = index;
        this.getWenshuByType();
    }
    echartsClick(index) {
        console.log("index", index);
        let nums = this.echartsXlist[index];
        this.eduType = nums;
        this.getWenshuByType();
    }
    //详情页面
    gotoDetail(item) {
        this.router.navigate(["/type/detail"], {
            skipLocationChange: true,
            queryParams: {
                "item": JSON.stringify(item),
                "from": "/type"
            }
        });
    }
    loadCateCharts() {
        this.lawSerivce.getTypeloadCateNumb().subscribe(data => {
            data.forEach((element, index) => {
                if (!!element.penalty_class && element.penalty_class == this.selectTitle) {
                    this.loadDataForChart(element.penalty_prison_type_list);
                }
            });
        });
    }
    loadDataForChart(list) {
        var yList = [];
        var xList = [];
        // for (var key in element){
        //     if (key != "unkown" && key != "penalty_class"){
        //         yList.push(element[key]);
        //     }
        // }
        list.forEach(element => {
            xList.push(element.name);
            yList.push(element.number);
        });
        console.log("xList", xList, "yList", yList);
        this.echartsXlist = xList;
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            grid: {
                top: '10%',
                right: '3%',
                left: '15%',
                bottom: '15%'
            },
            xAxis: [{
                    type: 'category',
                    name: '',
                    nameTextStyle: {
                        color: "#333"
                    },
                    data: xList,
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.52)'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        interval: 0,
                        color: '#000',
                        textStyle: {
                            fontSize: 11
                        },
                    },
                }],
            yAxis: [
                {
                    type: 'value',
                    name: '（个）',
                    nameTextStyle: {
                        color: "#333"
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: '#333',
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(196,224,245,1)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(196,224,245,1)'
                        }
                    }
                }
            ],
            series: [{
                    type: 'bar',
                    data: yList,
                    name: '数量',
                    barWidth: '16px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#4DDEFE' // 0% 处的颜色
                                }, {
                                    offset: 0.5,
                                    color: '#57FBFA' // 50% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#3D8BFF' // 100% 处的颜色
                                }], false),
                            barBorderRadius: [2, 2, 0.1, 0.1],
                            shadowColor: 'rgba(0,0,0,0)',
                            shadowBlur: 4,
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#111',
                                    fontSize: 14
                                }
                            },
                        }
                    },
                }]
        };
        var mychart1 = echarts.init(document.getElementById("type-echart"));
        mychart1.clear();
        mychart1.setOption(option);
        mychart1.getZr().on('click', params => {
            let pointInPixel = [params.offsetX, params.offsetY];
            console.log("params", params);
            if (mychart1.containPixel('grid', pointInPixel)) {
                let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0];
                console.log("xIndex", xIndex);
                this.echartsClick(xIndex);
            }
        });
        window.onresize = mychart1.resize();
    }
};
TypeCaseComponent.ctorParameters = () => [
    { type: _law_service__WEBPACK_IMPORTED_MODULE_3__["LawService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TypeCaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type-case',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./type-case.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/law/type-case/type-case.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./type-case.component.scss */ "./src/app/page/law/type-case/type-case.component.scss")).default]
    })
], TypeCaseComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/apple/Desktop/work4/hdiocNew/hdcgioc/src/main/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map