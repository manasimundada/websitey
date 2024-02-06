var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("lightmode");
    if(document.body.classList.contains("lightmode")){
        icon.src = "moon.png";
    }
    else{
        icon.src = "sun.png";
    }
};

function openResume() {
    window.open('resume_iss.pdf', '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("image-container");
    var manasiImage = document.getElementById("manasi-image");
    var manasiVideo = document.getElementById("manasi-video");
    
    manasiVideo.style.display = "none";

    imageContainer.addEventListener("mouseenter", function() {
        manasiImage.style.display = "none";
        manasiVideo.style.display = "block";
        manasiVideo.play();
    });

    imageContainer.addEventListener("mouseleave", function() {
        manasiVideo.pause();
        manasiVideo.style.display = "none";
        manasiImage.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var programmingSkillsTrigger = document.getElementById("programming-skills-trigger");
    var programmingSkillsList = document.getElementById("programming-skills-list");

    programmingSkillsList.innerHTML = "";
    programmingSkillsList.style.display = "none";

    programmingSkillsTrigger.addEventListener("click", function() {
        programmingSkillsTrigger.innerHTML = "Here are my programming skills:";
        programmingSkillsList.style.display = "block";

        var programmingSkills = ["- C", "- Python", "- HTML", "- CSS", "- JavaScript", "- Bash"];
        var currentIndex = 0;

        function typeNextSkill() {
            if (currentIndex < programmingSkills.length) {
                var currentSkill = programmingSkills[currentIndex];
                var skillListItem = document.createElement("li");
                programmingSkillsList.appendChild(skillListItem);

                for (var i = 0; i < currentSkill.length; i++) {
                    setTimeout(function(index) {
                        skillListItem.innerHTML += currentSkill[index];
                    }, i * 100, i);
                }

                currentIndex++;
                setTimeout(typeNextSkill, currentSkill.length * 100 + 500);
            }
        }

        typeNextSkill();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var likesCounts = {
        post1: JSON.parse(localStorage.getItem("likesCounts1")) || 0,
        post2: JSON.parse(localStorage.getItem("likesCounts2")) || 0
    };

    var likeButtons = document.querySelectorAll(".like-button");

    likeButtons.forEach(function (button, index) {
        var postId = "post" + (index + 1);

        var likesDisplay = button.parentElement.querySelector(".likes-count");

        likesDisplay.textContent = likesCounts[postId] === 1 ? "LIKE: " + likesCounts[postId] : "LIKES: " + likesCounts[postId];

        if (likesCounts[postId] > 0) {
            button.classList.add("liked");
            button.querySelector("i").classList.replace("fa-regular", "fa-solid");
        }

        button.addEventListener("click", function () {
            toggleLike(button, likesDisplay, postId);
        });
    });

    function toggleLike(button, likesDisplay, postId) {
        var likeIcon = button.querySelector("i");

        button.classList.toggle("liked");

        if (button.classList.contains("liked")) {
            likesCounts[postId]++;
        } else {
            likesCounts[postId]--;
        }

        likeIcon.classList.toggle("fa-solid");
        likeIcon.classList.toggle("fa-regular");

        likesDisplay.textContent = likesCounts[postId] === 1 ? "LIKES: " + likesCounts[postId] : "LIKES: " + likesCounts[postId];

        localStorage.setItem("likesCounts" + postId.charAt(4), JSON.stringify(likesCounts[postId]));
    }
});

