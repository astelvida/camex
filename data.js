const IMAGE_DIR = './assets/images'

export const introSlides = [
    {
        title: 'Welcome to myLevels!',
        image: require(`${IMAGE_DIR}/sugar-icon.jpg`),
        description:
            'myLevels is about learning about how food impacts you uniquely. Everyone’s body is unique - and so are your responses to food! Now you finally have a way to see this!',
    },
    {
        title: 'Why Sugar Levels?',
        image: require(`${IMAGE_DIR}/chart-page.jpg`),
        description:
            'Understanding your sugar level responses to food is key to keeping your sugar levels balanced and being in control of your weight, cravings, energy levels and cognition.',
    },
    {
        title: 'So how does it work?',
        image: require(`${IMAGE_DIR}/food-icon.jpg`),
        description:
            'First phase towards this is to experiment with lots of food to see what spikes and what doesn’t in different situations. myLevels is all about finding better substitutes rather than restricting yourself - find the best alternatives!',
    },
    {
        title: 'What should I test?',
        description:
            "Start having a think about what you want to test. You'll want to be on roughly your normal diet but also add try find east alternatives for things that spike you.",
    },
    {
        title: 'Easy Switches',
        description:
            'Also testing out easy switches on things that you notice spike you. (eg. switch raspberries for strawberries, switch the type of milk, switch the brand of beer, switch rice for bulgar wheat, switch low-fat for high-fat yoghurt etc).',
    },
    {
        title: '"Good" Food and "Bad" Food',
        description:
            "Foods you’ve been eating because you think they’re good for you, but you don’t really like them that much. And foods you love but avoid because you think they're bad for you!",
    },
]

export const introSlides2 = [
    {
        title: 'Your Levels and Food',
        description:
            'Here you’ll see your sugar levels and your food logs for each day. ',
        image: require(`${IMAGE_DIR}/sugar-icon.jpg`),
    },
    {
        title: 'Sugar Levels Graph',
        description:
            "Since the goal is to keep your sugar levels stable, there is a shaded area on the chart. Don't worry if you spike out of it, but it's just something to aim for in the best case.",
        image: require(`${IMAGE_DIR}/chart-page.jpg`),
    },
    {
        title: 'Zoom into the chart',
        description: 'You can zoom in on the graph to take a closer look.',
        image: require(`${IMAGE_DIR}/chart-zoom.jpg`),
    },
    {
        title: 'Log book',
        description: "Below the chart you'll see your food logs for that day.",
        image: require(`${IMAGE_DIR}/log-book.jpg`),
    },
    {
        title: 'Zoom in on one food',
        description:
            'By clicking on the food log you can see a close up version of it.',
        image: require(`${IMAGE_DIR}/bacon-spike.jpg`),
    },
    {
        title: 'Food Logging',
        description:
            'Log everything you eat in the food log page, ideally try to leave as much time as possible between meals to see the full response to each one.',
        image: require(`${IMAGE_DIR}/food-icon.jpg`),
    },
    {
        title: 'Name and photo',
        description:
            'Just log with a name that makes sense to you - you can also add an image as a reminder and to make the food page look nicer!',
        image: require(`${IMAGE_DIR}/log-name.jpg`),
    },
    {
        title: 'Categories',
        description:
            'Categories help to organise and compare food. They will be pre-filled based on the time of day but feel free to add whatever you like there (eg. “treat”, “beer”, “desert”, “deliveroo” etc). ',
        image: require(`${IMAGE_DIR}/log-categories.jpg`),
    },
    {
        title: 'Time and date',
        description:
            'Put time as the start of the meal. Pro Tip: If you’re in a rush, just take a photo of the food to help you remember the time and then log it later.',
        image: require(`${IMAGE_DIR}/log-date.jpg`),
    },
    {
        title: 'Events and Exercise',
        description:
            'You can log your exercise or anything else (non-food) that may affect your sugar levels here. Exercise may spike (or crash) your sugar levels. If you don’t log it then the spike can be attributed to the nearest food. Other things that you might want to log in here are things like stressful events, meditation and supplements.',
        image: require(`${IMAGE_DIR}/exercise-icon.jpg`),
    },
    {
        title: 'myLevels scores',
        description:
            "You'll get a score (around 5 hours later) for each food you have data for. It is how high your sugar levels have spiked from that food - obviously this is a case of ‘less is more!’",
        image: require(`${IMAGE_DIR}/new-score-1.jpg`),
    },
    {
        title: 'myLevels scores example',
        description:
            "Here's an example of a myLevels score. If your baseline is around 5 and then the meal takes your sugar levels up to 10, the myLevels food score would be 5. If your sugar levels are already elevated from another food then the score also takes this into account.",
        image: require(`${IMAGE_DIR}/cereal-spike.jpg`),
    },
    {
        title: 'Spike Free Food',
        description:
            'We consider food with a spike score less than 1 to be “spike free” and so a good food for your sugar levels. You’ll see these scores coloured green. Anything between 1 and 2.5 is orange, and above 2.5 is red. The goal is to find spike free food for each category - so you know you always have spike free options in all situations.',
        image: require(`${IMAGE_DIR}/bacon-spike.jpg`),
    },
    {
        title: 'Food Page',
        description:
            'Here you’ll find all your foods that you have scores for - arranged by the category you’ve put for them and ordered from best to worst. Spike Free Foods: You’ll see a count of your ‘spike free foods’ in each category.',
        image: require(`${IMAGE_DIR}/all-scroll.jpg`),
    },
    {
        title: 'Make your own categories!',
        description:
            'Pro tip: create your own categories when you log your food (you can see I have a "beer" category) then you can see how they compare here.',
        image: require(`${IMAGE_DIR}/beer-scroll.jpg`),
    },
    {
        title: 'List Page',
        description:
            'If you prefer to see them as a list - can go on this page.',
        image: require(`${IMAGE_DIR}/beer-list.jpg`),
    },
    {
        title: 'Some category ideas',
        description:
            'milk -> try also full-fat milk, oat milk and almond milk to see if you notice any difference in spikes. beer: try differnt types, seen a big variatio in them! protein bars: If you like protein bars, try a few alternatives. fruit:  If you like fruit try a few different fruits. Takeaway meals: lots of options here !',
    },
    {
        title: 'Test Kitchen',
        description:
            'The Test Kitchen is full of suggested test foods (some of which come in the welcome box, but others are just things that the community has already tested). Logging them through this page allows you to see how you compare to others. ',
        image: require(`${IMAGE_DIR}/kitchen.jpg`),
    },
    {
        title: 'How You Compare',
        description:
            'You’ll then be able to see here how your scores compare to the rest of the myLevels community in this page.',
        image: require(`${IMAGE_DIR}/compare.jpg`),
    },
    {
        title: 'Did You Know?',
        description:
            'Each day we’ll share with you a little bit of science. Just click on them to read more!',
        image: require(`${IMAGE_DIR}/daily-fact.jpg`),
    },
    {
        title: 'Health Hacks',
        description:
            "We'll also share daily 'health hacks'. These are ideas of things that can help keep your sugar levels more balanced.",
        image: require(`${IMAGE_DIR}/health-hack.jpg`),
    },
    {
        title: 'Personal Insights',
        description:
            "Once you've been using the sensor for a week you'll start to get some personalised insights.",
        image: require(`${IMAGE_DIR}/personalised-insights.jpg`),
    },
    {
        title: 'FAQs and Guide',
        description:
            'Find the FAQs at the top of that page, along with this guide if you want to read it again',
        image: require(`${IMAGE_DIR}/guide-faq.jpg`),
    },
]
