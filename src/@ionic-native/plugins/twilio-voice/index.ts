import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Twilio Voice
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { TwilioVoice } from '@ionic-native/twilio-voice';
 *
 *
 * constructor(private twilioVoice: TwilioVoice) { }
 *
 * ...
 *
 *
 */
@Plugin({
  pluginName: 'TwilioVoice',
  plugin: 'cordova-plugin-twiliovoicesdk', // npm package name, example: cordova-plugin-camera
  pluginRef: 'Twilio.TwilioVoiceClient', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/openforge/cordova-plugin-twiliovoicesdk.git#load-as-js-module', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class TwilioVoice extends IonicNativePlugin {

  @Cordova()
  call(token: any, params:any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  sendDigits(digits: any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  disconnect(): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  rejectCallInvite(): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  acceptCallInvite(): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setSpeaker(mode:any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  unmuteCall(): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  isCallMuted(fn:any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  initialize(token: any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  error(fn: any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  clientinitialized(fn: any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  callinvitereceived(fn: any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }


  @Cordova()
  callinvitecanceled(fn: any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  calldidconnect(fn: any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  calldiddisconnect(fn: any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}

