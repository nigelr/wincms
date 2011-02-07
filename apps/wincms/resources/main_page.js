// ==========================================================================
// Project:   Wincms - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Wincms */

// This page describes the main user interface for your application.  
Wincms.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'labelView move'.w(),

    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, width: 200, height: 18 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1",
      value: "Welcome to SproutCore!"
    }),
    move: SC.PalettePane.design({
      layout: { centerX: 200, centerY: 0, width: 200, height: 200 },
      anchorLocation: SC.ANCHOR_BOTTOM,

      contentView: SC.View.design({
        childViews: 'summaryView'.w(),

        summaryView: SC.LabelView.design({
          layout: { centerY: 0, height: 18, left: 20, right: 20 },
          textAlign: SC.ALIGN_CENTER,

          value: "hello"
        })
      })
    })
  })

});
