import PandaBridge from 'pandasuite-bridge';
import './index.css';

function myInit() {
  const url = new URL(window.parent.location.href);
  const wid = url.searchParams.get('wid');
  
  if (wid) {
    const queryable = {
      wid,
    };

    PandaBridge.send(PandaBridge.UPDATED, { queryable });
  }
}

PandaBridge.init(() => {
  PandaBridge.onLoad(() => {
    if (document.readyState === 'complete') {
      myInit();
    } else {
      document.addEventListener('DOMContentLoaded', myInit, false);
    }
  });

});
