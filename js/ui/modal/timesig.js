import {async_redraw} from "../../abc/abchelper.js";
import {nd} from "../../notes/NotesData.js";

export let timesigs = [
  {beats_per_measure: 2, beat_type: 4, measure_len: 8},
  {beats_per_measure: 3, beat_type: 4, measure_len: 12},
  {beats_per_measure: 2, beat_type: 2, measure_len: 16},
  {beats_per_measure: 4, beat_type: 4, measure_len: 16},
  {beats_per_measure: 5, beat_type: 4, measure_len: 20},
  {beats_per_measure: 6, beat_type: 4, measure_len: 24},
  {beats_per_measure: 3, beat_type: 2, measure_len: 24},
  {beats_per_measure: 6, beat_type: 8, measure_len: 12},
  {beats_per_measure: 3, beat_type: 8, measure_len: 6},
];

function timesig_html(beats, value, id) {
  let color = '#aaccee';
  if (value === 8) {
    color='#aaeecc';
  }
  if (value === 2) {
    color='#eeaacc';
  }
  let st = '';
  st += `<a id=atimesig${id} class='btn btn-outline-white p-1' href=# role='button' style='min-width: 30px;'>`;
  st += '';
  //st += `<div id=timesig${id} class='color:black; rounded p-1' style='display: inline-block; margin: 5px; align-items: center; justify-content: center; vertical-align: center; min-width: 35px; background: ${color}'>`;
  st += `<div style='font-family: sans-serif; font-size: 1.5em'>${beats}</div>`;
  st += `<div><img style='margin-left: auto; margin-right: auto; display: block' src=img/color/black.png width=16 height=1></div>`;
  st += `<div style='font-family: sans-serif; font-size: 1.5em'>${value}</div>`;
  st += '</a>&nbsp;&nbsp;&nbsp;&nbsp;';
  return st;
}

export function showTimesigModal() {
  let st = '';
  st += "<div style='width: 100%; text-align: center;'>";
  for (const i in timesigs) {
    st += timesig_html(timesigs[i].beats_per_measure, timesigs[i].beat_type, i);
  }
  st += "</table></div>";
  document.getElementById("ModalTitle").innerHTML = 'Choose time signature';
  document.getElementById("ModalBody").innerHTML = st;
  for (const i in timesigs) {
    document.getElementById('atimesig' + i).onclick=function() {
      $('#Modal').modal('hide');
      nd.set_timesig(timesigs[i]);
      async_redraw();
    };
  }
  $('#Modal').modal();
}
