function Entity() {
  this.remove = function() {
    this.element.remove();
    const selfIndex = this.list.findIndex((person) => {
      return person.id === this.id;
    });

    this.list.splice(selfIndex, 1);
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