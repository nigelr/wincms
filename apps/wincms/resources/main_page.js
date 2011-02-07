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
    childViews: 'move aButton bButton'.w(),

    aButton: SC.ButtonView.design({
      layout: { Left: 0, bottom: 0, width: 200, height: 30 },
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      title: "Press ME",
      valueBinding: "Wincms.showWindow"
    }),
    bButton: SC.ButtonView.design({
      layout: { Left: 0, bottom: 40, width: 200, height: 30 },
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      title: "Press ME 2",
      valueBinding: "Wincms.showWindow2"
    }),
    move: SC.PalettePane.design({
      layout: { centerX: 200, centerY: 0, width: 200, height: 200 },
      anchorLocation: SC.ANCHOR_BOTTOM,
      isVisibleBinding: "Wincms.showWindowMore",
      contentView: SC.View.design({
        childViews: 'summaryView'.w(),

        summaryView: SC.LabelView.design({
          layout: { centerY: 0, height: 18, left: 20, right: 20 },
          textAlign: SC.ALIGN_CENTER,

          value: "Hello World"

        })
      })
    })
  })

});
