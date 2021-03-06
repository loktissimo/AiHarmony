import {keyicon} from "../lib/keys.js";
import {commands} from "../commands.js";
import {trigger_tooltips} from "../../lib.js";

export function showShortcutsModal() {
  document.getElementById("ModalTitle").innerHTML = 'Artinfuser Harmony';
  let st = '';
  st += 'Artinfuser Harmony allows to edit, play, import and export notes. Minimal supported note length is 1/16. Tuplets are not supported. Only single clef, key and time signature is supported per staff.<br><br>';
  st += '<table class=table>';
  st += '<tr>';
  st += '<th>Function';
  st += '<th>Button';
  st += '<th>Keyboard shortcut';
  for (let command of commands) {
    if (!command.name) continue;
    st += '<tr>';
    st += `<td>${command.name}`;
    st += "<td style='text-align: center'>";
    if (command.toolbar) {
      st += `<div style='text-align: center; min-width: 40px; ${command.toolbar.style || ''}'>${command.toolbar.html}</div>`;
    }
    st += "<td style='text-align: center'>";
    if (command.keys) {
      let keys_st = '';
      for (let keys of command.keys) {
        let key_st = '';
        for (let key of keys.split('+')) {
          if (key_st) key_st += " <b>+</b> ";
          key_st += keyicon(key);
        }
        if (keys_st) keys_st += ' <b>or</b> ';
        keys_st += key_st;
      }
      st += keys_st;
    }
  }
  document.getElementById("ModalBody").innerHTML = st;
  trigger_tooltips();
  $('#Modal').modal();
}
