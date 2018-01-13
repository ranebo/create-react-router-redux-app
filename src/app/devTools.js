import React from 'react'
import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import SliderMonitor from 'redux-slider-monitor';
import LogMonitor from 'redux-devtools-log-monitor'

export default createDevTools(
  <DockMonitor
    defaultIsVisible={ false }
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-p"
    changeMonitorKey='ctrl-m'
  >
    <LogMonitor />
    <SliderMonitor />
  </DockMonitor>
);
