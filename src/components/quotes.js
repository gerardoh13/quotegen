const quotes = [
    {
        "q": "Where violence reigns, reason is weak.",
        "a": "Nicolas Chamfort",
        "c": "38",
        "h": "<blockquote>&ldquo;Where violence reigns, reason is weak.&rdquo; &mdash; <footer>Nicolas Chamfort</footer></blockquote>"
    },
    {
        "q": "Never confuse a single defeat with a final defeat.",
        "a": "F. Scott Fitzgerald",
        "c": "50",
        "h": "<blockquote>&ldquo;Never confuse a single defeat with a final defeat.&rdquo; &mdash; <footer>F. Scott Fitzgerald</footer></blockquote>"
    },
    {
        "q": "Nothing is more real than nothing.",
        "a": "Samuel Beckett",
        "c": "34",
        "h": "<blockquote>&ldquo;Nothing is more real than nothing.&rdquo; &mdash; <footer>Samuel Beckett</footer></blockquote>"
    },
    {
        "q": "It is never too late to be what you might have been.",
        "a": "George Eliot",
        "c": "52",
        "h": "<blockquote>&ldquo;It is never too late to be what you might have been.&rdquo; &mdash; <footer>George Eliot</footer></blockquote>"
    },
    {
        "q": "Successful people are not without problems. They're simply people who've learned to solve their problems.",
        "a": "Earl Nightingale",
        "c": "105",
        "h": "<blockquote>&ldquo;Successful people are not without problems. They're simply people who've learned to solve their problems.&rdquo; &mdash; <footer>Earl Nightingale</footer></blockquote>"
    },
    {
        "q": "The thing about smart people is that they seem like crazy people to dumb people.",
        "a": "Stephen Hawking",
        "c": "80",
        "h": "<blockquote>&ldquo;The thing about smart people is that they seem like crazy people to dumb people.&rdquo; &mdash; <footer>Stephen Hawking</footer></blockquote>"
    },
    {
        "q": "Little minds have little worries, big minds have no time for worries.",
        "a": "Ralph Waldo Emerson",
        "c": "69",
        "h": "<blockquote>&ldquo;Little minds have little worries, big minds have no time for worries.&rdquo; &mdash; <footer>Ralph Waldo Emerson</footer></blockquote>"
    },
    {
        "q": "Don't take yourself too seriously, pretty soon you can find the humor in our everyday lives.",
        "a": "Betty White",
        "c": "92",
        "h": "<blockquote>&ldquo;Don't take yourself too seriously, pretty soon you can find the humor in our everyday lives.&rdquo; &mdash; <footer>Betty White</footer></blockquote>"
    },
    {
        "q": "It's very strange that the people you love are often the people you're most cruel to.",
        "a": "Kenneth Branagh",
        "c": "85",
        "h": "<blockquote>&ldquo;It's very strange that the people you love are often the people you're most cruel to.&rdquo; &mdash; <footer>Kenneth Branagh</footer></blockquote>"
    },
    {
        "q": "Surrender to what is. Let go of what was. Have faith in what will be.",
        "a": "Sonia Ricotti",
        "c": "69",
        "h": "<blockquote>&ldquo;Surrender to what is. Let go of what was. Have faith in what will be.&rdquo; &mdash; <footer>Sonia Ricotti</footer></blockquote>"
    },
    {
        "q": "You drown not by falling into a river, but by staying submerged in it.",
        "a": "Paulo Coelho",
        "c": "70",
        "h": "<blockquote>&ldquo;You drown not by falling into a river, but by staying submerged in it.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
    },
    {
        "q": "Hope itself is like a star- not to be seen in the sunshine of prosperity, and only to be discovered in the night of adversity.",
        "a": "Charles Spurgeon",
        "c": "126",
        "h": "<blockquote>&ldquo;Hope itself is like a star- not to be seen in the sunshine of prosperity, and only to be discovered in the night of adversity.&rdquo; &mdash; <footer>Charles Spurgeon</footer></blockquote>"
    },
    {
        "q": "The day is for honest men, the night for thieves.",
        "a": "Euripides",
        "c": "49",
        "h": "<blockquote>&ldquo;The day is for honest men, the night for thieves.&rdquo; &mdash; <footer>Euripides</footer></blockquote>"
    },
    {
        "q": "Your mind is infinite, it's your doubts that are limiting.",
        "a": "Robert Kiyosaki",
        "c": "58",
        "h": "<blockquote>&ldquo;Your mind is infinite, it's your doubts that are limiting.&rdquo; &mdash; <footer>Robert Kiyosaki</footer></blockquote>"
    },
    {
        "q": "The first half of life is devoted to forming a healthy ego, the second half is going inward and letting go of it.",
        "a": "Carl Jung",
        "c": "113",
        "h": "<blockquote>&ldquo;The first half of life is devoted to forming a healthy ego, the second half is going inward and letting go of it.&rdquo; &mdash; <footer>Carl Jung</footer></blockquote>"
    },
    {
        "q": "Begin now to be what you will be hereafter.",
        "a": "St. Jerome",
        "c": "43",
        "h": "<blockquote>&ldquo;Begin now to be what you will be hereafter.&rdquo; &mdash; <footer>St. Jerome</footer></blockquote>"
    },
    {
        "q": "The wisest men follow their own direction.",
        "a": "Euripides",
        "c": "42",
        "h": "<blockquote>&ldquo;The wisest men follow their own direction.&rdquo; &mdash; <footer>Euripides</footer></blockquote>"
    },
    {
        "q": "We must be free not because we claim freedom, but because we practice it.",
        "a": "William Faulkner",
        "c": "73",
        "h": "<blockquote>&ldquo;We must be free not because we claim freedom, but because we practice it.&rdquo; &mdash; <footer>William Faulkner</footer></blockquote>"
    },
    {
        "q": "People who are unable to motivate themselves must be content with mediocrity, no matter how impressive their other talents.",
        "a": "Andrew Carnegie",
        "c": "123",
        "h": "<blockquote>&ldquo;People who are unable to motivate themselves must be content with mediocrity, no matter how impressive their other talents.&rdquo; &mdash; <footer>Andrew Carnegie</footer></blockquote>"
    },
    {
        "q": "Peace is letting it be. Letting life flow, letting emotions flow through you.",
        "a": "Kamal Ravikant",
        "c": "77",
        "h": "<blockquote>&ldquo;Peace is letting it be. Letting life flow, letting emotions flow through you.&rdquo; &mdash; <footer>Kamal Ravikant</footer></blockquote>"
    },
    {
        "q": "The man who does not value himself, cannot value anything or anyone.",
        "a": "Ayn Rand",
        "c": "68",
        "h": "<blockquote>&ldquo;The man who does not value himself, cannot value anything or anyone.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>"
    },
    {
        "q": "All that a man achieves and all that he fails to achieve is the direct result of his own thoughts.",
        "a": "James Allen",
        "c": "98",
        "h": "<blockquote>&ldquo;All that a man achieves and all that he fails to achieve is the direct result of his own thoughts.&rdquo; &mdash; <footer>James Allen</footer></blockquote>"
    },
    {
        "q": "Empty your mind, be formless.",
        "a": "Bruce Lee",
        "c": "29",
        "h": "<blockquote>&ldquo;Empty your mind, be formless.&rdquo; &mdash; <footer>Bruce Lee</footer></blockquote>"
    },
    {
        "q": "To every action there is always opposed an equal reaction.",
        "a": "Isaac Newton",
        "c": "58",
        "h": "<blockquote>&ldquo;To every action there is always opposed an equal reaction.&rdquo; &mdash; <footer>Isaac Newton</footer></blockquote>"
    },
    {
        "q": "Success is good at any age, but the sooner you find it, the longer you will enjoy it.",
        "a": "Napoleon Hill",
        "c": "85",
        "h": "<blockquote>&ldquo;Success is good at any age, but the sooner you find it, the longer you will enjoy it.&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>"
    },
    {
        "q": "None of us can change our yesterdays but all of us can change our tomorrows.",
        "a": "Colin Powell",
        "c": "76",
        "h": "<blockquote>&ldquo;None of us can change our yesterdays but all of us can change our tomorrows.&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>"
    },
    {
        "q": "Work as though you would live forever, and live as though you would die today. Go another mile.",
        "a": "Og Mandino",
        "c": "95",
        "h": "<blockquote>&ldquo;Work as though you would live forever, and live as though you would die today. Go another mile.&rdquo; &mdash; <footer>Og Mandino</footer></blockquote>"
    },
    {
        "q": "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.",
        "a": "Brian Tracy",
        "c": "129",
        "h": "<blockquote>&ldquo;Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
    },
    {
        "q": "All problems are illusions of the mind.",
        "a": "Eckhart Tolle",
        "c": "39",
        "h": "<blockquote>&ldquo;All problems are illusions of the mind.&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>"
    },
    {
        "q": "The fact of the matter is that there will be nothing learned from any challenge in which we don't try our hardest.",
        "a": "Josh Waitzkin",
        "c": "114",
        "h": "<blockquote>&ldquo;The fact of the matter is that there will be nothing learned from any challenge in which we don't try our hardest.&rdquo; &mdash; <footer>Josh Waitzkin</footer></blockquote>"
    },
    {
        "q": "I am not what happened to me, I am what I choose to become.",
        "a": "Carl Jung",
        "c": "59",
        "h": "<blockquote>&ldquo;I am not what happened to me, I am what I choose to become.&rdquo; &mdash; <footer>Carl Jung</footer></blockquote>"
    },
    {
        "q": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
        "a": "Rumi",
        "c": "74",
        "h": "<blockquote>&ldquo;Your heart is the size of an ocean. Go find yourself in its hidden depths.&rdquo; &mdash; <footer>Rumi</footer></blockquote>"
    },
    {
        "q": "It is better to light a single candle than to curse the darkness.",
        "a": "Eleanor Roosevelt",
        "c": "65",
        "h": "<blockquote>&ldquo;It is better to light a single candle than to curse the darkness.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
    },
    {
        "q": "Everything is created twice, first in the mind and then in reality.",
        "a": "Robin Sharma",
        "c": "67",
        "h": "<blockquote>&ldquo;Everything is created twice, first in the mind and then in reality.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
    },
    {
        "q": "A moving door hinge never corrodes. Flowing water never grows stagnant.",
        "a": "Ming-Dao Deng",
        "c": "71",
        "h": "<blockquote>&ldquo;A moving door hinge never corrodes. Flowing water never grows stagnant.&rdquo; &mdash; <footer>Ming-Dao Deng</footer></blockquote>"
    },
    {
        "q": "He who hesitates is a damned fool.",
        "a": "Mae West",
        "c": "34",
        "h": "<blockquote>&ldquo;He who hesitates is a damned fool.&rdquo; &mdash; <footer>Mae West</footer></blockquote>"
    },
    {
        "q": "The quicker you let go of old cheese, the sooner you find new cheese.",
        "a": "Spencer Johnson",
        "c": "69",
        "h": "<blockquote>&ldquo;The quicker you let go of old cheese, the sooner you find new cheese.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>"
    },
    {
        "q": "Who you are is always right.",
        "a": "Ming-Dao Deng",
        "c": "28",
        "h": "<blockquote>&ldquo;Who you are is always right.&rdquo; &mdash; <footer>Ming-Dao Deng</footer></blockquote>"
    },
    {
        "q": "No matter how much preparation we do, in the real tests of our lives, we'll be in unfamiliar terrain.",
        "a": "Josh Waitzkin",
        "c": "101",
        "h": "<blockquote>&ldquo;No matter how much preparation we do, in the real tests of our lives, we'll be in unfamiliar terrain.&rdquo; &mdash; <footer>Josh Waitzkin</footer></blockquote>"
    },
    {
        "q": "One of the really tough things is figuring out what questions to ask. Once you figure out the question, then the answer is relatively easy.",
        "a": "Elon Musk",
        "c": "139",
        "h": "<blockquote>&ldquo;One of the really tough things is figuring out what questions to ask. Once you figure out the question, then the answer is relatively easy.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"
    },
    {
        "q": "Happiness is only real when shared.",
        "a": "Christopher McCandless",
        "c": "35",
        "h": "<blockquote>&ldquo;Happiness is only real when shared.&rdquo; &mdash; <footer>Christopher McCandless</footer></blockquote>"
    },
    {
        "q": "Time goes from present to past.",
        "a": "Shunryu Suzuki",
        "c": "31",
        "h": "<blockquote>&ldquo;Time goes from present to past.&rdquo; &mdash; <footer>Shunryu Suzuki</footer></blockquote>"
    },
    {
        "q": "The power to make and break habits and learning how to do that is really important.",
        "a": "Naval Ravikant",
        "c": "83",
        "h": "<blockquote>&ldquo;The power to make and break habits and learning how to do that is really important.&rdquo; &mdash; <footer>Naval Ravikant</footer></blockquote>"
    },
    {
        "q": "Don't be afraid to see what you see.",
        "a": "Ronald Reagan",
        "c": "36",
        "h": "<blockquote>&ldquo;Don't be afraid to see what you see.&rdquo; &mdash; <footer>Ronald Reagan</footer></blockquote>"
    },
    {
        "q": "A man is great not because he hasn't failed; a man is great because failure hasn't stopped him.",
        "a": "Confucius",
        "c": "95",
        "h": "<blockquote>&ldquo;A man is great not because he hasn't failed; a man is great because failure hasn't stopped him.&rdquo; &mdash; <footer>Confucius</footer></blockquote>"
    },
    {
        "q": "What we dwell on is who we become.",
        "a": "Oprah Winfrey",
        "c": "34",
        "h": "<blockquote>&ldquo;What we dwell on is who we become.&rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>"
    },
    {
        "q": "Walk towards the sunshine, and the shadows will fall behind you.",
        "a": "Mary Engelbreit",
        "c": "64",
        "h": "<blockquote>&ldquo;Walk towards the sunshine, and the shadows will fall behind you.&rdquo; &mdash; <footer>Mary Engelbreit</footer></blockquote>"
    },
    {
        "q": "You can't get to a place that you don't believe exists.",
        "a": "Unknown",
        "c": "55",
        "h": "<blockquote>&ldquo;You can't get to a place that you don't believe exists.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
    },
    {
        "q": "Faithless is he that says farewell when the road darkens.",
        "a": "J.R.R. Tolkien",
        "c": "57",
        "h": "<blockquote>&ldquo;Faithless is he that says farewell when the road darkens.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>"
    },
    {
        "q": "Courage is knowing what not to fear.",
        "a": "Plato",
        "c": "36",
        "h": "<blockquote>&ldquo;Courage is knowing what not to fear.&rdquo; &mdash; <footer>Plato</footer></blockquote>"
    }
]
export default quotes