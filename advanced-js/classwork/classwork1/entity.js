function Entity() {
  this.remove = function() {
    this.element.remove();
  }

  this.render = function() {
    const listItem = document.createElement("li");
    listItem.innerHTML = this.firstName + ' ' + this.lastName;
    this.listElement.appendChild(listItem);
    this.element = listItem;

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Delete";
    listItem.appendChild(removeBtn);

    removeBtn.addEventListener("click", this.remove.bind(this));
  }
}
