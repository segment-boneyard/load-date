var time = new Date()
  , perf = window.performance;

if (perf && perf.timing && perf.timing.responseEnd) {
  time = new Date(perf.timing.responseEnd);
}

module.exports = time;