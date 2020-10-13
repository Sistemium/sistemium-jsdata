import eachSeries from 'async/eachSeries';
import whilst from 'async/whilst';
import filterSeries from 'async/filterSeries';
import mapSeries from 'async/mapSeries';

export async function eachSeriesAsync(arr, iterator) {
  return applyAsync(eachSeries, arr, iterator);
}

export async function whilstAsync(filter, iterator) {
  return applyAsync(whilst, filter, iterator);
}


export async function filterSeriesAsync(arr, iterator) {
  return applyAsync(filterSeries, arr, iterator);
}

export async function mapSeriesAsync(arr, iterator) {
  return applyAsync(mapSeries, arr, iterator);
}

function applyAsync(asyncFn, arg1, arg2) {
  return asyncFn(res => {
    res(null, arg1());
  }, arg2);
}
