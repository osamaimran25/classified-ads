export function showImage(image) {
  if (!image) {
    return "https://i.ibb.co/B3y30yC/404.gif";
  } else {
    if (image.split(":")[0] === "http" || image.split(":")[0] === "https") {
      return image;
    } else {
      return `http://209.97.162.0/${image}`;
    }
  }
}

export function isImage(file) {
  var ext = file.split(".");
  ext = ext[ext.length - 1].toLowerCase();
  var arrayExtensions = ["jpg", "jpeg", "png", "bmp", "gif"];
  // var arrayExtensions = ['jpg', 'jpeg', 'png', 'bmp', 'gif' , 'raw' , 'indd' , 'al' , 'eps' , 'pdf' ,'tiff' , 'psd' , 'jfif' , 'webp' ];
  if (arrayExtensions.lastIndexOf(ext) === -1) {
    return false;
  } else {
    return true;
  }
}

export function getDateFromTime(time) {
  const newTime = time.split(":");
  var date = new Date();

  date.setHours(newTime[0]);
  date.setMinutes(newTime[1]);
  date.setSeconds(newTime[2]);
  return date;
}

export function getHourMinuteSeconds(date) {
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
