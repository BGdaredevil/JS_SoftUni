function attachEvents() {
  document.querySelector("#btnLoadPosts").addEventListener("click", () => {
    fetch("http://localhost:3030/jsonstore/blog/posts")
      .then((r) => r.json())
      .then((infoObj) => {
        Object.keys(infoObj).forEach((key) => {
          document
            .querySelector("select#posts")
            .appendChild(
              e("option", { attributes: { value: infoObj[key].id } }, infoObj[key].title)
            );
        });
      });
  });

  document.querySelector("#btnViewPost").addEventListener("click", () => {
    let postIdNeeded = document.querySelector("select#posts").value;
    if (postIdNeeded === "") {
      return;
    }
    Promise.all([
      fetch("http://localhost:3030/jsonstore/blog/comments").then((r) => r.json()),
      fetch(`http://localhost:3030/jsonstore/blog/posts/${postIdNeeded}`).then((r) => r.json()),
    ])
      .then(([comments, postInfo]) => {
        let relevant = Object.values(comments).filter((x) => x.postId === postIdNeeded);
        document.querySelector("#post-comments").innerHTML = "";
        relevant.forEach((com) => {
          document
            .querySelector("#post-comments")
            .appendChild(e("li", { attributes: { id: com.id } }, com.text));
        });
        document.querySelector("#post-body").innerText = postInfo.body;
        document.querySelector("#post-title").innerText = postInfo.title;
      })
      .catch((err) => {
        document.querySelector("#post-comments").innerText = "Error";
      });
  });

  function e(tag, obj, ...content) {
    let result = document.createElement(tag);

    if (obj.hasOwnProperty("listener")) {
      Object.entries(obj.listener).forEach(([ev, han]) => {
        result.addEventListener(ev, han);
      });
    }

    if (obj.hasOwnProperty("attributes")) {
      Object.entries(obj.attributes).forEach(([attr, val]) => {
        result[attr] = val;
      });
    }

    if (obj.hasOwnProperty("classes")) {
      obj.classes.forEach((c) => {
        result.classList.add(c);
      });
    }

    content.forEach((c) => {
      if (typeof c === "number" || typeof c === "string") {
        result.innerText = c;
      } else {
        result.appendChild(c);
      }
    });

    return result;
  }
}

attachEvents();
