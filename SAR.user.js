 // ==UserScript==
// @name        Customized s0urce
// @namespace   naleg-userscripts
// @icon        https://s0urce.io/icons/s0urce.svg
// @version     0.1.1
//
// @match       https://s0urce.io/*
// @grant       none
//
// @downloadURL  https://raw.githubusercontent.com/NalegProto/s0urce-asset-replacer/refs/heads/main/SAR.js
//
// @author      Naleg
// @description A s0urce userscript that replaces game assets with new ones
// ==/UserScript==

const testingJSON = '{"model":1,"packVersion":1,"items":{"botnet":{"images":{"thumbnail":"data:image/webp;base64,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","full":"data:image/webp;base64,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"}}}}';
// this is only a temporary JSON for testing purposes

class Resources {
    items;
    profiles;

    constructor(jsonString) {
        this.loadJSON(jsonString);
    }

    loadJSON(jsonString) {
        const parsedJson = JSON.parse(jsonString);

        if ("items" in parsedJson) this.items = parsedJson["items"];
        if ("profiles" in parsedJson) this.profiles = parsedJson["profiles"]
    }

    getImageResource(resourceName, dataType, imageType = undefined) {
        resourceName = resourceName.toLowerCase();
        if (
            resourceName in this.items
            && dataType in this.items[resourceName]
        ) {
            if (dataType == "images") {
                if (imageType in this.items[resourceName][dataType]) return this.items[resourceName][dataType][imageType];
            } else {
                return this.items[resourceName][dataType];
            }
        }

        return null;
    }
}

class CustomizedS0urce {
    /**
    * idk how javascript handles duplicates of functions
    * if there can even be with userscript loaders
    * so I'd rather do a class with everything inside
    * probably not the best way to do it
    * but
    * it does it
    * */

    static resourcePack;

    static init() {
        console.log("Initializing CustomizedS0urce...")

        CustomizedS0urce.resourcePack = new Resources(testingJSON);
        console.log(CustomizedS0urce.resourcePack);

        const mainContent = document.querySelector("body > div > main");

        const observer = new MutationObserver(function(mutations){
            /*
            * We want to see when new images are added to the window
            * It would be easier if PFPs were images from CSS, oh well we gotta do it this way then
            *
            * Windows with PFPs :
            * Friends
            *  => And check for new people appearing inside
            * Computer
            * Target list
            *  => And check for new people connecting & new bots
            * Inventory
            *  => And check for new items
            * Item description (has desc id)
            *
            * All of those have an icon with alt text describing their icon, except for item description that has a specific "desc" id
            * better to identify w/ ids classes and icons than text, esp if texts get edited later on
            * */

            for (const v of mutations) {
                if (v.type == "childList") {
                    if (v.addedNodes.length > 0) {
                        const addedNode = v.addedNodes[0];
                        if (addedNode instanceof Element) {
                            // If is item description
                            if (
                                addedNode.id == "desc"
                                && addedNode.classList.contains("svelte-181npts")
                               ) {
                                srcCorrector.observe(addedNode, srcCorrectorParams);

                                const item = addedNode.querySelector("img");

                                CustomizedS0urce.changeImage(item, "full")
                            } else {
                                const iconAlt = addedNode.querySelector("div.window-title > img").alt;
                                // When it is the Inventory Window

                                switch (iconAlt) {
                                    case "Inventory":
                                        console.log("Inventory window detected");
                                        const itemList = addedNode.querySelector("div#item-container");

                                        srcCorrector.observe(itemList, srcCorrectorParams);
                                        itemList.querySelectorAll("img").forEach(v => CustomizedS0urce.changeImage(v, "thumbnail"));

                                        break;

                                    case "Target List":
                                        console.log("Target list detected");

                                        const targetList = addedNode.querySelector("div.window-content > div > div#list");

                                        srcCorrector.observe(targetList, srcCorrectorParams);

                                        targetList.querySelectorAll("img[alt='Icon']").forEach(v => CustomizedS0urce.changeImage(v, "thumbnail"));
                                }
                            }
                        }
                    }
                }
            }
        });

        // Quick and dirty solution to srcs changing after they were set
        const srcCorrector = new MutationObserver(function(mutations) {
            for (const v of mutations) {
                console.log(v);
                if (v.target.getAttribute("src").startsWith("items/")) {
                    v.target.setAttribute("src", v.oldValue);
                }
            }
        });

        const srcCorrectorParams = {
            subtree: true,
            attributes: true,
            attributeOldValue: true,
            attributeFilter: ["src"],
        }

        observer.observe(mainContent, {
            childList: true
        });
    }

    static changeImage(image, imageType) {
        let id = image.src.slice(24, -5)
        if (id.endsWith("-s")) id = id.slice(0, -2);

        const imageB64 = CustomizedS0urce.resourcePack.getImageResource(id, "images", imageType);
        console.log(id);

        if (imageB64) {
            console.log("Item present in resource pack");
            image.src = imageB64;
        }
    }
}

CustomizedS0urce.init();
