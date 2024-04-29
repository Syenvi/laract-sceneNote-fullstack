const FetchDailymotionVideoThumbnail = async (url) => {
  let thumbnailUrl = "";
  try {
    const response = await fetch(
      `https://api.dailymotion.com/video/${url}?fields=thumbnail_large_url`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Dailymotion video thumbnail");
    }
    const data = await response.json();
    thumbnailUrl = data.thumbnail_large_url;
  } catch (error) {
    console.error("Error fetching Dailymotion video thumbnail:", error);
  }
  return {
    thumbnail: thumbnailUrl,
  };
};

const GetUrlFromVideo = (url) => {
  let finalUrl = url.match(/\/video\/([^\/]+)/);

  // Cek apakah ada kecocokan
  if (finalUrl) {
    var videoId = finalUrl[1];
    return {
      finalUrl: videoId,
    };
  }
};

const formatDate = (date) => {
  // Buat objek tanggal dari string tanggal API
  let apiDate = new Date(date);

  // Daftar nama hari dalam bahasa Inggris
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Daftar nama bulan dalam bahasa Inggris
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Ambil nama hari dari tanggal
  let dayName = days[apiDate.getUTCDay()];

  // Ambil tanggal dari tanggal
  let day = apiDate.getUTCDate();

  // Ambil nama bulan dari tanggal
  let monthName = months[apiDate.getUTCMonth()];

  // Ambil tahun dari tanggal
  let year = apiDate.getUTCFullYear();

  // Hasilkan string yang diinginkan
  let result = dayName + "," + day + " " + monthName + " " + year;
  return result;
};

export { FetchDailymotionVideoThumbnail, GetUrlFromVideo, formatDate };
