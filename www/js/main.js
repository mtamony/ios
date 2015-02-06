/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$(document).on('click', 'a[href^=http], a[href^=https]', function(e){
               
               e.preventDefault();
               var $this = $(this);
               var target = $this.data('inAppBrowser') || '_blank';
               
               window.open($this.attr('href'), target, 'location=no');
               
               });

/*$( document ).on( "pageinit",  function() {
                 
                 $( document ).on( "swipeleft swiperight",  function( e ) {
                                  // We check if there is no open panel on the page because otherwise
                                  // a swipe to close the left panel would also open the right panel (and v.v.).
                                  // We do this by checking the data that the framework stores on the page element (panel: open).
                                  if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
                                  if ( e.type === "swipeleft"  ) {
                                  $( "#right-panel" ).panel( "open" );
                                  } else if ( e.type === "swiperight" ) {
                                  $( "#left-panel" ).panel( "open" );
                                  }
                                  }
                                  });
                 });*/

var gaPlugin;


function initialize() {
    document.addEventListener("deviceready", onDeviceReady, true);
    
}

function onDeviceReady() {
    gaPlugin = window.plugins.gaPlugin;
    gaPlugin.init(nativePluginResultHandler, nativePluginErrorHandler, "UA-26017499-2", 10);
    // Note: A request for permission is REQUIRED by google. You probably want to do this just once, though, and remember the answer for subsequent runs.
    //navigator.notification.confirm('GA_PLUGIN would like your permission to collect usage data. No personal or user identifiable data will be collected.', permissionCallback, 'Attention', 'Allow,Deny');

    
}

/*function permissionCallback (button) {
if (button === 1)
gaPlugin.init(nativePluginResultHandler, nativePluginErrorHandler, "UA-26017499-2", 10);
  
}*/

function nativePluginResultHandler (result) {
    /*alert('nativePluginResultHandler - '+result);*/
    console.log('nativePluginResultHandler: '+result);
    
}

function nativePluginErrorHandler (error) {
    /*alert('nativePluginErrorHandler - '+error);*/
    console.log('nativePluginErrorHandler: '+error);
}

function TrackButtonClicked() {
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Button", "Click", "event only", 1);
    
}

function VariableButtonClicked() {
    // Set a dimension based on index and value. Make sure you have added a dimension in the GA dashboard to the
    // default property for the passed in index, and your desired scope. GA allows up to 20 dimensions for a free account
    gaPlugin.setVariable( nativePluginResultHandler, nativePluginErrorHandler, 1, "Purple");
    
    // dimensions are are passed to the next event sent to GA. go ahead and fire off an event with the label (key) of your choice
    // In this example, the label for custom dimension 1 will show up in the dashboard as "favoriteColor". This is much more efficent
    // than the old custom variable method introduced in V1, (plus you get 20 free dimensions vs 5 free custom variables)
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "event with variable", "set variable", "favoriteColor", 1);
}

function PageButtonClicked() {
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "some.url.com");
}

function goingAway() {
    gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);
};

/*
 Copyright 2011 : Simone Gianni <simoneg@apache.org>
 
 -- update by tcuttrissweb --
 adds in title besdie thumbs in carousel.
 adjusted css from the original to make room for this
 allows resizing
 to adjust size of the player adjust the css for:
 .youtube iframe.player width / height accordingly.
 
 Released under The Apache License 2.0
 http://www.apache.org/licenses/LICENSE-2.0
 
 */

(function() {
 function createPlayer(jqe, video, options) {
 var ifr = $('iframe', jqe);
 if (ifr.length === 0) {
 ifr = $('<iframe scrolling="no">');
 ifr.addClass('player');
 }
 var src = 'http://www.youtube.com/embed/' + video.id;
 if (options.playopts) {
 src += '?';
 for (var k in options.playopts) {
 src += k + '=' + options.playopts[k] + '&';
 }
 src += '_a=b';
 }
 ifr.attr('src', src);
 jqe.append(ifr);
 }
 
 function createCarousel(jqe, videos, options) {
 var car = $('div.carousel', jqe);
 if (car.length === 0) {
 car = $('<div>');
 car.addClass('carousel');
 jqe.append(car);
 
 }
 $.each(videos, function(i, video) {
        
        options.thumbnail(car, video, options);
        });
 }
 
 function createThumbnail(jqe, video, options) {
 
 var imgurl = video.thumbnails[0].url;
 var img = $('img[src="' + imgurl + '"]');
 var desc;
 var container;
 if (img.length !== 0) return;
 img = $('<img align="left">');
 img.addClass('thumbnail');
 jqe.append(img);
 img.attr('src', imgurl);
 img.attr('title', video.title);
 img.click(function() {
           options.player(options.maindiv, video, $.extend(true, {}, options, {
                                                           playopts: {
                                                           autoplay: 1
                                                           }
                                                           }));
           });
 desk = $('<p class="yt-descript">' + video.title + '</p>');
 jqe.append(desk);
 desk.click(function() {
            options.player(options.maindiv, video, $.extend(true, {}, options, {
                                                            playopts: {
                                                            autoplay: 1
                                                            }
                                                            }));
            });
 }
 
 var defoptions = {
 autoplay: false,
 user: null,
 carousel: createCarousel,
 player: createPlayer,
 thumbnail: createThumbnail,
 loaded: function() {},
 playopts: {
 autoplay: 0,
 egm: 1,
 autohide: 1,
 fs: 1,
 showinfo: 1
 }
 };
 
 
 $.fn.extend({
             youTubeChannel: function(options) {
             var md = $(this);
             md.addClass('youtube');
             md.addClass('youtube-channel');
             var allopts = $.extend(true, {}, defoptions, options);
             allopts.maindiv = md;
             $.getJSON('http://gdata.youtube.com/feeds/users/' + allopts.user + '/uploads?alt=json-in-script&format=5&callback=?', null, function(data) {
                       var feed = data.feed;
                       var videos = [];
                       $.each(feed.entry, function(i, entry) {
                              
                              var video = {
                              title: entry.title.$t,
                              id: entry.id.$t.match('[^/]*$'),
                              thumbnails: entry.media$group.media$thumbnail
                              };
                              videos.push(video);
                              });
                       allopts.allvideos = videos;
                       allopts.carousel(md, videos, allopts);
                       allopts.player(md, videos[0], allopts);
                       allopts.loaded(videos, allopts);
                       });
             }
             });
 
 })();

$(function() {
  $('#player').youTubeChannel({
                              user: 'SBCERA'
                              });
  });





