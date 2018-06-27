# mtr-slate-theme
MTR Shopify theme, created using Slate 1.0


#### Required Dependencies
1. node 8.x
2. npm
3. yarn (https://yarnpkg.com/lang/en/docs/install/#windows-stable)

#### Setup for Development
1. clone repo
2. Download .env file from trello
3. go to mtr-slate-theme base directory
4. copy .env file here
5. open command prompt in mtr-slate-theme base directory
6. run command `npm install`
7. run command `yarn start`
8. if everything is correctly configured, your browser will open and load up the webpage

## Theme Usage Details

### Adding Youtube videos to products
In order to add a Youtube video to a product, you need the YouTube Embedded Video ID. This can be obtained from the url for the video.

##### Example of YouTube Video Key:
```
https://www.youtube.com/embed/YXCJzLZ2-hc
                             ^ Video Key ^
```

Videos are added as images to the product via the Shopify Admin.
Steps are below.

1. Go to the Product that you would like to add a video to, in Shopify Admin.
2. Scroll down to Images, and click **Add image from URL**.
3. Paste **v this v** into the textbox that shows up, replacing *VIDEO_ID* with the Video Key from your Video URL.
##### Youtube Video Thumbnail URL
```
http://img.youtube.com/vi/VIDEO_ID/#.jpg
```
4. Click *Add Image*.

*Note: The image is now added to the product, but we still need to add the video url, so that the site will know what to load when the image is clicked.*

5. Go to the image that you just added.
6. Click **Edit Alt Text**.
7. Paste your Embedded YouTube Video URL into the textbox that appears.
##### Example
```
https://www.youtube.com/embed/YXCJzLZ2-hc
```
8. Click **Done** button.
9. The video will now be added to the product page on the site, and should show up when you go to that page.

### Adding More Info Images to Product Pages
In Product pages, it is possible to add additional images that can provide additional information for the product, i.e. spec sheets, etc.

1. Go to the Product Page
2. Add an Image to the product
3. Edit the Alt Text for the image, adding the below tag
```
isMoreInfo
```
4. The image will no longer show up in the main product carousel, and will show up in the More Info section of the Product Page.
