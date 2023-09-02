const time = new Date();
const mins = -60 * time.getMinutes();
const hour = -3600 * (time.getHours() % 12);
app.style.setProperty("--_dm", `${mins}s`);
app.style.setProperty("--_dh", `${hour + mins}s`);
