// @ts-nocheck
import { Component } from 'react';
import { ApplyPluginsType } from 'umi';
import dva from 'dva';
// @ts-ignore
import createLoading from 'C:/Users/Administrator/Desktop/ppds-member-platform-admin/node_modules/dva-loading/dist/index.esm.js';
import { plugin, history } from '../core/umiExports';
import ModelGlobal0 from 'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/models/global.ts';
import ModelLogin1 from 'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/models/login.ts';
import ModelSetting2 from 'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/models/setting.ts';
import ModelUser3 from 'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/models/user.ts';
import ModelModel4 from 'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/account/center/model.ts';
import ModelModel5 from 'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/account/settings/model.ts';
import ModelModel6 from 'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/user/login/model.ts';
import ModelModel7 from 'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/user/register/model.ts';

let app:any = null;

export function _onCreate(options = {}) {
  const runtimeDva = plugin.applyPlugins({
    key: 'dva',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    // @ts-ignore
    ...(typeof window !== 'undefined' && window.g_useSSR ? { initialState: window.g_initialProps } : {}),
    ...(options || {}),
  });
  
  app.use(createLoading());
  
  (runtimeDva.plugins || []).forEach((plugin:any) => {
    app.use(plugin);
  });
  app.model({ namespace: 'global', ...ModelGlobal0 });
app.model({ namespace: 'login', ...ModelLogin1 });
app.model({ namespace: 'setting', ...ModelSetting2 });
app.model({ namespace: 'user', ...ModelUser3 });
app.model({ namespace: 'model', ...ModelModel4 });
app.model({ namespace: 'model', ...ModelModel5 });
app.model({ namespace: 'model', ...ModelModel6 });
app.model({ namespace: 'model', ...ModelModel7 });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  constructor(props: any) {
    super(props);
    // run only in client, avoid override server _onCreate()
    if (typeof window !== 'undefined') {
      _onCreate();
    }
  }

  componentWillUnmount() {
    let app = getApp();
    app._models.forEach((model:any) => {
      app.unmodel(model.namespace);
    });
    app._models = [];
    try {
      // 释放 app，for gc
      // immer 场景 app 是 read-only 的，这里 try catch 一下
      app = null;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
