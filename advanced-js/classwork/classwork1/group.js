
const groupList = [];

function Group(name, id) {
  this.name = name;
  this.element = null;
  this.id = id;
  this.list = groupList;

  this.render = function() {
    const list = document.querySelector(".js-group-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = this.name;
    list.appendChild(listItem);
    this.element = listItem;

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Delete";
    listItem.appendChild(removeBtn);

    removeBtn.addEventListener("click", this.remove.bind(this));

  }
}
Group.prototype = new Entity();

const addGroupBtn = document.querySelector(".js-add-group-btn");
addGroupBtn.addEventListener("click", function() {
  const groupId = groupList.length + 1;
  const groupName = document.querySelector(".js-group-name-input").value;
  const group = new Group(groupName, groupId);
  groupList.push(group);
  group.render();
});
