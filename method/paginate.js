module.exports = async function (data, page, limit, path) {
    let query = [];
    let getArray = [];
    let pageLength = parseInt(limit);
    let pageAll = data.length / pageLength;
    let pageStartQuery = parseInt(page) * pageLength - pageLength;
    for (let i = 0; i < pageLength; i++) {
      await getArray.push(pageStartQuery + i);
    }
    await getArray.forEach((el) => {
      for (let i = 0; i < data.length; i++) {
        if (i == el) {
          query.push(data[i]);
          break;
        }
      }
    });
    if (page == "1") {
      return {
        page_all: Math.ceil(pageAll),
        page_next: `${path}?page=${parseInt(page) + 1}&limit=${limit}`,
        items: query,
      };
    }else {
      return {
        page_all: Math.ceil(pageAll),
        page_next: `${path}?page=${parseInt(page) + 1}&limit=${limit}`,
        page_previous: `${path}?page=${parseInt(page) - 1}&limit=${limit}`,
        items: query,
      };
    }
    
  };
  