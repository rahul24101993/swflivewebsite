(this.webpackJsonpcreatingjsxcomponent=this.webpackJsonpcreatingjsxcomponent||[]).push([[53],{2651:function(e,n,i){"use strict";i.r(n);i(0);n.default={actions:{openCommandGroup:{actionType:"popup",inputData:{options:{view:"AwPopupCommandBar"}}}},commandHandlers:{},commandPlacements:{},commands:{},conditions:{true:{expression:"true"},false:{expression:"false"}},i18n:{}}},2652:function(e,n,i){"use strict";i.r(n);var t=i(0);Object(t.h)("js/splmTableMenuUtility",(()=>i.e(1814).then(i.bind(null,3209)))),Object(t.h)("js/splmTableSelectionHelper",(()=>Promise.all([i.e(56),i.e(54),i.e(55),i.e(2),i.e(3),i.e(44),i.e(62)]).then(i.bind(null,2943)))),n.default={commands:{removeAllFilters:{iconId:"",title:"{{i18n.removeAllFilters}}",description:"{{i18n.removeAllFiltersDesc}}"},toggleDynamicRowHeight:{iconId:"",title:"{{i18n.toggleDynamicRowHeight}}"},splmTableSortAscending:{iconId:"miscSortedAscending",title:"{{i18n.sortAscending}}"},splmTableSortDescending:{iconId:"miscSortedDescending",title:"{{i18n.sortDescending}}"},splmTableRemoveSort:{iconId:"miscUnSorted",title:"{{i18n.removeSort}}"},splmTableHideColumn:{iconId:"cmdHide",title:"{{i18n.hideColumn}}"},splmTableFreezeColumn:{iconId:"uiFreeze",title:"{{i18n.freezeMenu}}"},splmTableUnfreezeColumn:{iconId:"aw-splm-tableIconFreeze",title:"{{i18n.freezeMenu}}"},splmTableSelectColumn:{iconId:"cmdCheckmark",title:"{{i18n.selectColumn}}"}},commandHandlers:{removeAllFiltersCommandHandler:{id:"removeAllFilters",action:"removeAllFilters",activeWhen:!0,enableWhen:{condition:"conditions.isRemoveAllFiltersEnabled"},visibleWhen:{condition:"conditions.isRemoveAllFiltersVisible"}},toggleDynamicRowHeightCommandHandler:{id:"toggleDynamicRowHeight",action:"toggleDynamicRowHeight",activeWhen:!0,enableWhen:{condition:"conditions.toggleDynamicRowHeightEnabled"},visibleWhen:{condition:"conditions.toggleDynamicRowHeightVisible"},selectWhen:{condition:"conditions.toggleDynamicRowHeightSelected"}},splmTableSortAscendingCommandHandler:{id:"splmTableSortAscending",action:"sortAscending",activeWhen:!0,enableWhen:!0,visibleWhen:{condition:"conditions.columnSortingVisible"},selectWhen:{condition:"conditions.sortAscendingSelected"}},splmTableSortDescendingCommandHandler:{id:"splmTableSortDescending",action:"sortDescending",activeWhen:!0,enableWhen:!0,visibleWhen:{condition:"conditions.columnSortingVisible"},selectWhen:{condition:"conditions.sortDescendingSelected"}},splmTableRemoveSortCommandHandler:{id:"splmTableRemoveSort",action:"removeSort",activeWhen:!0,enableWhen:!0,visibleWhen:{condition:"conditions.columnSortingVisible"},selectWhen:{condition:"conditions.removeSortSelected"}},splmTableHideColumnCommandHandler:{id:"splmTableHideColumn",action:"hideColumnBatch",activeWhen:!0,enableWhen:!0,visibleWhen:{condition:"conditions.hideColumnVisible"},selectWhen:!1},splmTableFreezeColumnCommandHandler:{id:"splmTableFreezeColumn",action:"freezeColumnBatch",activeWhen:!0,enableWhen:!0,visibleWhen:{condition:"conditions.freezeColumnVisible"},selectWhen:!1},splmTableUnfreezeColumnCommandHandler:{id:"splmTableUnfreezeColumn",action:"unfreezeColumnBatch",activeWhen:!0,enableWhen:!0,visibleWhen:{condition:"conditions.unfreezeColumnVisible"},selectWhen:!0},splmTableSelectColumnCommandHandler:{id:"splmTableSelectColumn",action:"selectTableColumnBatch",activeWhen:!0,enableWhen:!0,visibleWhen:{condition:"conditions.selectTableColumnVisible"}}},commandPlacements:{removeAllFiltersPlacement:{id:"removeAllFilters",priority:300,uiAnchor:"aw_gridMenu"},toggleDynamicRowHeightPlacement:{id:"toggleDynamicRowHeight",priority:400,uiAnchor:"aw_gridMenu"},sortAscendingPlacement:{id:"splmTableSortAscending",priority:100,uiAnchor:"aw_splmTable_columnMenu"},sortDescendingPlacement:{id:"splmTableSortDescending",priority:200,uiAnchor:"aw_splmTable_columnMenu"},removeSortPlacement:{id:"splmTableRemoveSort",priority:300,uiAnchor:"aw_splmTable_columnMenu"},hideColumnPlacement:{id:"splmTableHideColumn",priority:400,uiAnchor:"aw_splmTable_columnMenu"},freezeColumnPlacement:{id:"splmTableFreezeColumn",priority:500,uiAnchor:"aw_splmTable_columnMenu"},unfreezeColumnPlacement:{id:"splmTableUnfreezeColumn",priority:600,uiAnchor:"aw_splmTable_columnMenu"},selectTableColumnPlacement:{id:"splmTableSelectColumn",priority:700,uiAnchor:"aw_splmTable_columnMenu"}},actions:{removeAllFilters:{actionType:"Event",method:"Event",inputData:{events:[{name:"pltable.columnFilterApplied",eventData:{gridId:"{{commandContext.gridId}}"}}]}},toggleDynamicRowHeight:{actionType:"JSFunction",method:"toggleDynamicRowHeight",deps:"js/splmTableMenuUtility",inputData:{gridContextDispatcher:"{{commandContext.gridContextDispatcher}}",dynamicRowHeightStatus:"{{commandContext.gridContext.dynamicRowHeightStatus}}"}},sortAscending:{actionType:"batchJob",steps:[{action:"sortColumn",inputArg:{sortDirection:"ASC"}},{action:"closeColumnMenu"}]},sortDescending:{actionType:"batchJob",steps:[{action:"sortColumn",inputArg:{sortDirection:"DESC"}},{action:"closeColumnMenu"}]},removeSort:{actionType:"batchJob",steps:[{action:"sortColumn",inputArg:{sortDirection:""}},{action:"closeColumnMenu"}]},sortColumn:{actionType:"JSFunction",method:"columnSortChanged",deps:"js/splmTableMenuUtility",inputData:{gridId:"{{commandContext.gridId}}",columnDef:"{{commandContext.gridContext.columnDef}}",gridContextDispatcher:"{{commandContext.gridContextDispatcher}}",sortDirection:"{{parameters.sortDirection}}",currentColumnIndex:"{{commandContext.gridContext.currentColumnIndex}}",isBulkEditing:"{{commandContext.gridContext.isBulkEditing}}",columnProvider:"{{commandContext.columnProvider}}"}},closeColumnMenu:{actionType:"JSFunction",method:"closeColumnMenu",deps:"js/splmTableMenuUtility",inputData:{popupRef:"{{commandContext.gridContext.popupRef}}"},outputData:{menuContext:""}},hideColumnBatch:{actionType:"batchJob",steps:[{action:"hideColumn"},{action:"closeColumnMenu"}]},hideColumn:{actionType:"JSFunction",method:"hideColumn",deps:"js/splmTableMenuUtility",inputData:{column:"{{commandContext.gridContext.columnDef}}",gridContextDispatcher:"{{commandContext.gridContextDispatcher}}"},outputData:{columnContext:""}},freezeColumnBatch:{actionType:"batchJob",steps:[{action:"freezeColumn",inputArg:{freeze:!0}},{action:"closeColumnMenu"}]},unfreezeColumnBatch:{actionType:"batchJob",steps:[{action:"freezeColumn",inputArg:{freeze:!1}},{action:"closeColumnMenu"}]},freezeColumn:{actionType:"JSFunction",method:"freezeColumn",deps:"js/splmTableMenuUtility",inputData:{gridId:"{{commandContext.gridId}}",columnDef:"{{commandContext.gridContext.columnDef}}",isFreezeCommand:"{{parameters.freeze}}",defaultColumnPinIndex:"{{commandContext.gridContext.defaultColumnPinIndex}}",gridContextDispatcher:"{{commandContext.gridContextDispatcher}}"}},selectTableColumnBatch:{actionType:"batchJob",steps:[{action:"selectTableColumn"},{action:"closeColumnMenu"}]},selectTableColumn:{actionType:"JSFunction",method:"setCellColumnSelection",deps:"js/splmTableSelectionHelper",inputData:{dataProvider:"{{commandContext.dataProvider}}",columnDef:"{{commandContext.gridContext.columnDef}}"}}},conditions:{isRemoveAllFiltersEnabled:{expression:"commandContext.isColumnFilterApplied && !commandContext.gridContext.isBulkEditing"},isRemoveAllFiltersVisible:{expression:"commandContext.gridOptions.isFilteringEnabled"},toggleDynamicRowHeightVisible:{expression:"!commandContext.gridOptions.enableDynamicRowHeight"},toggleDynamicRowHeightEnabled:{expression:"!commandContext.gridContext.isBulkEditing"},toggleDynamicRowHeightSelected:{expression:"commandContext.gridContext.dynamicRowHeightStatus === true"},sortAscendingSelected:{expression:"commandContext.gridContext.columnDef.field === commandContext.sortCriteria[0].fieldName && commandContext.sortCriteria[0].sortDirection === 'ASC'"},sortDescendingSelected:{expression:"commandContext.gridContext.columnDef.field === commandContext.sortCriteria[0].fieldName && commandContext.sortCriteria[0].sortDirection === 'DESC'"},removeSortSelected:{expression:"!commandContext.sortCriteria || commandContext.gridContext.columnDef.field !== commandContext.sortCriteria[0].fieldName"},gridSortingEnabled:{expression:"commandContext.gridOptions.enableSorting === undefined || commandContext.gridOptions.enableSorting"},columnSortingVisible:{expression:"conditions.gridSortingEnabled && commandContext.gridContext.columnDef.enableSorting && !commandContext.gridContext.isBulkEditing"},hideColumnVisible:{expression:"conditions.columnHidingEnabled && !conditions.columnPiningDisabled"},columnHidingEnabled:{expression:"commandContext.gridContext.columnDef.enableColumnHiding !== false"},columnPiningDisabled:{expression:"commandContext.isArrangeSupported && conditions.columnPiningDisabledOnSpecialCase"},columnPiningDisabledOnSpecialCase:{expression:"commandContext.gridContext.columnDef.propertyName === 'object_name' || ( commandContext.gridOptions.useStaticFirstCol && commandContext.gridContext.columnDef.index === 0 )"},freezeColumnVisible:{expression:"commandContext.isPinningEnabled && commandContext.gridContext.columnDef.index + 1 !== commandContext.gridContext.pinColumnCount"},unfreezeColumnVisible:{expression:"commandContext.isPinningEnabled && commandContext.gridContext.columnDef.index !== commandContext.gridContext.defaultColumnPinIndex && commandContext.gridContext.columnDef.index + 1 === commandContext.gridContext.pinColumnCount"},selectTableColumnVisible:{expression:"commandContext.gridOptions.enableColumnSelection === true && commandContext.gridContext.columnDef.enableColumnSelection !== false && !commandContext.gridContext.columnDef.colSelected"}},i18n:{removeAllFilters:["treeTableMessages"],sortAscending:["treeTableMessages"],sortDescending:["treeTableMessages"],removeSort:["treeTableMessages"],toggleDynamicRowHeight:["UIMessages"],removeAllFiltersDesc:["UIMessages"],freezeMenu:["treeTableMessages"],unfreezeMenu:["treeTableMessages"],hideColumn:["treeTableMessages"],selectColumn:["treeTableMessages"]}}},2653:function(e,n,i){"use strict";i.r(n);var t=i(0);Object(t.h)("js/theme.service",(()=>Promise.resolve().then(i.bind(null,205)))),n.default={actions:{setLightTheme:{actionType:"JSFunction",method:"setTheme",inputData:{0:"ui-lightTheme"},deps:"js/theme.service"},setDarkTheme:{actionType:"JSFunction",method:"setTheme",inputData:{0:"ui-darkTheme"},deps:"js/theme.service"}},commandHandlers:{Awp0ChangeThemeHandler:{id:"Awp0ChangeTheme",activeWhen:!0},Awp0ShowLightThemeHandler:{id:"Awp0ShowLightTheme",action:"setLightTheme",activeWhen:!0,visibleWhen:{condition:"conditions.supportsLightTheme"},selectWhen:{condition:"conditions.isLightTheme"}},Awp0ShowDarkThemeHandler:{id:"Awp0ShowDarkTheme",action:"setDarkTheme",activeWhen:!0,visibleWhen:{condition:"conditions.supportsDarkTheme"},selectWhen:{condition:"conditions.isDarkTheme"}}},commandPlacements:{Awp0ChangeThemePlacement:{id:"Awp0ChangeTheme",uiAnchor:"aw_globalToolbar",priority:-1,showGroupSelected:!1}},commands:{Awp0ChangeTheme:{iconId:"cmdSettings",title:"{{i18n.changeThemeCommand}}",isGroup:!0,description:"{{i18n.Awp0ChangeThemeDesc}}"},Awp0ShowLightTheme:{iconId:"cmdSettings",title:"{{i18n.lightTheme}}"},Awp0ShowDarkTheme:{iconId:"cmdSettings",title:"{{i18n.darkTheme}}"}},conditions:{supportsLightTheme:{expression:"!ctx.changeThemeDisabled"},supportsDarkTheme:{expression:"!ctx.changeThemeDisabled"},isLightTheme:{expression:"ctx.theme === 'ui-lightTheme'"},isDarkTheme:{expression:"ctx.theme === 'ui-darkTheme'"},isColumnFilteringOn:{expression:"ctx.columnFilter.isFilteringOn === true"},isColumnFilteringOff:{expression:"ctx.columnFilter.isFilteringOn === false"}},i18n:{changeThemeCommand:["UIMessages"],lightTheme:["UIMessages"],darkTheme:["UIMessages"],fullScreenCommand:["UIMessages"],fullScreenCommandExit:["UIMessages"],arrange:["UIMessages"],showFiltersTitle:["UIMessages"],hideFiltersTitle:["UIMessages"],Awp0ChangeThemeDesc:["UIMessages"]}}},2654:function(e,n,i){"use strict";i.r(n);var t=i(0);Object(t.h)("js/fullScreenService",(()=>i.e(102).then(i.bind(null,3099)))),Object(t.h)("js/locationNavigation.service",(()=>i.e(83).then(i.bind(null,962)))),n.default={commands:{Awp0TaskbarFullScreen:{iconId:"uiFullScreen",title:"{{i18n.taskbarFullScreen}}",description:"{{i18n.Awp0TaskbarFullScreenDesc}}"},Awp0TaskbarExitFullScreen:{iconId:"uiExitFullScreen",title:"{{i18n.taskbarFullScreenExit}}",description:"{{i18n.Awp0TaskbarExitFullScreenDesc}}"},AwFullScreenExit:{iconId:"uiExitFullScreen",title:"{{i18n.taskbarFullScreenExit}}",description:"{{i18n.Awp0TaskbarExitFullScreenDesc}}"},AwFullScreenEnter:{iconId:"cmdFullScreen",title:"{{i18n.taskbarFullScreen}}",description:"{{i18n.Awp0TaskbarFullScreenDesc}}"},Awp0GoBack:{iconId:"cmdBackLHN",title:{text:"{0}",params:["{{ctx.previousLocationDisplayName}}"]}}},commandPlacements:{Awp0TaskbarFullScreenPlacement:{id:"Awp0TaskbarFullScreen",uiAnchor:"toolbarRightSlot",priority:1},Awp0TaskbarExitFullScreenPlacement:{id:"Awp0TaskbarExitFullScreen",uiAnchor:"toolbarRightSlot",priority:1},AwFullScreenExitPlacement:{id:"AwFullScreenExit",uiAnchor:"aw_fullScreenHeader",priority:1},AwFullScreenEnterPlacement:{id:"AwFullScreenEnter",uiAnchor:"aw_fullScreen",priority:1},Awp0GoBackGlobalNavigationbar:{id:"Awp0GoBack",uiAnchor:"aw_globalNavigationbar",priority:1},Awp0GoBackFooterToolbar:{id:"Awp0GoBack",uiAnchor:"aw_footer",relativeTo:"Awp0GoHome",priority:-1},Awp0ChangeThemeSessionbar:{id:"Awp0ChangeTheme",uiAnchor:"aw_userSessionbar",priority:2,showGroupSelected:!1}},commandHandlers:{Awp0TaskbarFullScreenHandler:{id:"Awp0TaskbarFullScreen",action:"Awp0TaskbarFullScreenToggleAction",activeWhen:{condition:"conditions.Awp0TaskbarFullScreenCmdCondition"},visibleWhen:{condition:"conditions.Awp0TaskbarFullScreenCmdCondition"}},Awp0TaskbarExitFullScreenHandler:{id:"Awp0TaskbarExitFullScreen",action:"Awp0TaskbarFullScreenToggleAction",activeWhen:{condition:"conditions.Awp0TaskbarExitFullScreenCmdCondition"},visibleWhen:{condition:"conditions.Awp0TaskbarExitFullScreenCmdCondition"}},AwFullScreenEnterHandler:{id:"AwFullScreenEnter",action:"AwFullScreenToggleAction",activeWhen:{condition:"conditions.AwFullScreenEnterCmdCondition"},visibleWhen:{condition:"conditions.AwFullScreenEnterCmdCondition"}},AwFullScreenExitHandler:{id:"AwFullScreenExit",action:"AwFullScreenToggleAction",activeWhen:{condition:"conditions.AwFullScreenExitCmdCondition"},visibleWhen:{condition:"conditions.AwFullScreenExitCmdCondition"}},Awp0GoBackHandler:{id:"Awp0GoBack",action:"goBack",activeWhen:!0,visibleWhen:!0}},actions:{Awp0TaskbarFullScreenToggleAction:{actionType:"modifyCtx",inputData:{methodType:"register",name:"taskbarfullscreen",value:"{{!(ctx.taskbarfullscreen === 'true')}}"}},AwFullScreenToggleAction:{actionType:"JSFunction",method:"toggleFullScreenEnablement",deps:"js/fullScreenService",inputData:{commandContext:"{{commandContext.fullScreenState}}"}},goBack:{actionType:"JSFunction",method:"goBack",deps:"js/locationNavigation.service"}},conditions:{Awp0TaskbarFullScreenCmdCondition:{expression:"!conditions.isTaskbarFullScreen"},Awp0TaskbarExitFullScreenCmdCondition:{expression:"conditions.isTaskbarFullScreen"},isTaskbarFullScreen:{expression:"ctx.taskbarfullscreen && ctx.taskbarfullscreen === 'true'"},AwFullScreenExitCmdCondition:{expression:"commandContext.fullScreenState.value === true"},AwFullScreenEnterCmdCondition:{expression:"commandContext.fullScreenState.value !== true"}},i18n:{taskbarFullScreen:["UIElementsMessages"],taskbarFullScreenExit:["UIElementsMessages"],aw_rightWall:["UIElementsMessages"],aw_footer:["UIElementsMessages"],aw_primaryWorkArea:["UIElementsMessages"],aw_globalNavigationbar:["UIElementsMessages"],Awp0TaskbarFullScreenDesc:["UIElementsMessages"],Awp0TaskbarExitFullScreenDesc:["UIElementsMessages"]}}},2655:function(e,n,i){"use strict";i.r(n);i(0);n.default={commands:{AddObjectPanelSetPin:{iconId:"cmdPin",title:"{{i18n.addObjectPanelPinButtonToolTip}}",description:"{{i18n.panelPinButtonDesc}}"},AddObjectPanelSetUnPin:{iconId:"cmdUnpin",title:"{{i18n.addObjectPanelUnpinButtonToolTip}}",description:"{{i18n.panelUnPinButtonDesc}}"}},commandHandlers:{addObjectPanelSetPinCommandHandler:{id:"AddObjectPanelSetPin",action:"addObjectPanelSetPin",activeWhen:{condition:"conditions.isAddObjectPanelPanelPinned"},visibleWhen:{condition:"conditions.isAddObjectPanelPanelPinned"}},addObjectPanelSetUnPinCommandHandler:{id:"AddObjectPanelSetUnPin",action:"addObjectPanelSetUnPin",activeWhen:{condition:"conditions.isAddObjectPanelPanelUnPinned"},visibleWhen:{condition:"conditions.isAddObjectPanelPanelUnPinned"}}},commandPlacements:{addObjectPanelSetPinPlacement:{id:"AddObjectPanelSetPin",uiAnchor:"addObjectPanel_oneStepPinCommands",priority:100},addObjectPanelSetUnPinPlacement:{id:"AddObjectPanelSetUnPin",uiAnchor:"addObjectPanel_oneStepPinCommands",priority:100}},actions:{addObjectPanelSetPin:{actionType:"Event",method:"Event",inputData:{events:[{name:"addObjectPanelCommand.addObjectPanelSetPin"}]}},addObjectPanelSetUnPin:{actionType:"Event",method:"Event",inputData:{events:[{name:"addObjectPanelCommand.addObjectPanelSetUnPin"}]}}},conditions:{isAddObjectPanelPanelPinned:{expression:"commandContext.pinnedToForm.dbValue"},isAddObjectPanelPanelUnPinned:{expression:"commandContext.unpinnedToForm.dbValue"}},i18n:{addObjectPanelPinButtonToolTip:["awAddDirectiveMessages"],addObjectPanelUnpinButtonToolTip:["awAddDirectiveMessages"],addObjectPanel_oneStepPinCommands:["awAddDirectiveMessages"],panelPinButtonDesc:["awAddDirectiveMessages"],panelUnPinButtonDesc:["awAddDirectiveMessages"],arrangeMenu:["treeTableMessages"],compareTitle:["UIMessages"]}}}}]);