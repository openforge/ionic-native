/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
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
 * this.twilioVoice.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
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

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  /*@Cordova()
  TwilioVoiceClient(): TwilioObject {
    return; // We add return; here to avoid any IDE / Compiler errors
  }*/

  @Cordova()
  initialize(token: any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}

/**
 * @hidden
 */
/*@Plugin({
  pluginName: 'TwilioVoice',
  plugin: 'cordova-plugin-twiliovoicesdk',
  pluginRef: 'Twilio'
})
export class TwilioObject {
  @Cordova()
  initialize(token: any): TwilioObject {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}*/
