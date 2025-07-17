const itemListContainer = document.getElementById("itemsListContainer");

const FILE_PATH = "./items.json";

const renderItems = async () => {
  let expiredItems = [];
  let activeItems = [];

  try {
    const response = await fetch(FILE_PATH);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    data.forEach((item) => {
      if (item.isExpired) {
        expiredItems.push(item);
      } else {
        activeItems.push(item);
      }
    });

    const sortedItems = [...activeItems, ...expiredItems];
    itemListContainer.innerHTML = "";

    sortedItems.forEach((item) => {
      const li = document.createElement("li");
      li.className = item.isExpired ? "expired listItem" : "active listItem";
      li.textContent = `${item.name} (${
        item.isExpired ? "Expired" : "Active"
      })`;
      itemListContainer.appendChild(li);
    });
  } catch (error) {
    itemListContainer.innerHTML = `<li style="color:red;text-align:center;font-size:14px">Error loading JSON: ${error.message}</li>`;
    itemListContainer.style.height = "calc(240px - 100px)"; // Reduce the height to show the error at center
    console.error(error);
  }
};

renderItems();
