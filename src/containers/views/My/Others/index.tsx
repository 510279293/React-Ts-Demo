import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import { any } from 'prop-types';
import * as styles from './index.scss';
import Interface from './cpnts/interface';

const VOICE_MAP = {
  0: [261.63, 293.67, 329.63, 349.23, 391.99, 440, 493.88],
  1: [523.25, 587.33, 659.26, 698.46, 783.99, 880, 987.77],
  2: [1046.5, 1174.66, 1318.51, 1396.92, 1567.98, 1760, 1975.52]
};
const audioCtx = new AudioContext();

class Others extends ComponentExt{
  constructor(props: any){
    super(props)
    this.state = {
      spanNum:  [1,2,3,4,5,6,7]
    }
  }
  playAudio(index,level){
    // 如果之前正在播，那就清掉之前的音频
    this.gainNode &&
    this.gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    this.oscillator && this.oscillator.stop(audioCtx.currentTime + 1);
    // 创建音调控制对象
    this.oscillator = audioCtx.createOscillator();
    // 创建音量控制对象
    this.gainNode = audioCtx.createGain();
    // 音调音量关联
    this.oscillator.connect(this.gainNode);
    // 音量和设备关联
    this.gainNode.connect(audioCtx.destination);
    // 音调类型指定为正弦波。sin好听一些
    this.oscillator.type = "sine";
    // 设置音调频率
    this.oscillator.frequency.value = VOICE_MAP[level][index];
    // 先把当前音量设为0
    this.gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    // 0.01秒时间内音量从刚刚的0变成1，线性变化
    this.gainNode.gain.linearRampToValueAtTime(
      1,
      audioCtx.currentTime + 0.01
    );
    // 声音开始
    this.oscillator.start(audioCtx.currentTime);
  },
  stopAudio(){
    // 0.8秒后停止声音
    this.gainNode &&
    this.gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      audioCtx.currentTime + 0.8
    );
    this.oscillator && this.oscillator.stop(audioCtx.currentTime + 0.8);
    this.oscillator = this.gainNode = null;
  },
  handleStart({target},level){
    const {
      dataset: { index }
    } = target;
    if (index !== undefined) {
      this.playAudio.call(target, index, level);
    }
  },
  handleStop({target}){
    const {
      dataset: { index }
    } = target;
    if (index !== undefined) {
      console.log(index, "stop");
      this.stopAudio.call(target);
    }
  },
  render(){
    const renderSpan = (level) => {
      return (<section onMouseDown={(e) => this.handleStart(e,level)} onMouseUp={(e) => this.handleStop(e)} onMouseout={(e) => this.handleStop(e)}>
        {
          this.state.spanNum.map((v:any,i:any) => {
            return(<span data-index={i} key={i}>{i+1}</span>)
          })
        }
      </section>)
    }
    return(<div className={styles['test-audio']}>
      {renderSpan(0)}
      {renderSpan(1)}
      {renderSpan(2)}
      <Interface />
    </div>)
  }
}

export default Others