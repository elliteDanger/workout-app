const profile = {
  TkH9awXbVpw5Edw9yRQ6: {
    name: "Pranav",
    physicalStats: {
      BMI: 0,
      bodyFatPercentage: 20.5,
      dailyCalories: 2500,
      height: 72,
      weight: 200,
    },
    picture: "",
    userName: "prnvbirajdar",
  },
  workouts: {
    nsb8Oqqpgk3KfZCeyjpa: {
      workoutTitle: "",
      date: new Date().toLocaleString(),
      squats: {
        notes: "",
        sets: [
          { reps: 15, weight: 80 },
          { reps: 20, weight: 100 },
        ],
      },
      lunges: {
        notes: "",
        sets: [
          { reps: 15, weight: 80 },
          { reps: 20, weight: 100 },
        ],
      },
    },
  },
};

const exerciseList1 = [
  {
    muscle: "Chest",
    id: 1,
    exercises: [
      { id: 101, exercise: "Dumbell Bench Press" },
      { id: 102, exercise: "Close-Grip Bench Press" },
      { id: 103, exercise: "Incline Bench Press" },
      { id: 104, exercise: "Decline Bench Press" },
      { id: 105, exercise: "Barbell Bench Press" },
      { id: 106, exercise: "Dumbell Flyes" },
      { id: 107, exercise: "Pushups" },
      { id: 108, exercise: "Cables Flyes" },
      { id: 109, exercise: "Chest Dips" },
      { id: 110, exercise: "Machine Chest Press" },
    ],
  },
  {
    muscle: "Biceps",
    id: 2,
    exercises: [
      { id: 201, exercise: "Hammer Curls" },
      { id: 202, exercise: "EZ Bar Curls" },
      { id: 203, exercise: "Dumbell Bicep Curls" },
      { id: 204, exercise: "Barbell Bicep Curls" },
      { id: 205, exercise: "Cable Curls" },
      { id: 206, exercise: "Machine Bicep Curls" },
      { id: 207, exercise: "Preacher Curls" },
    ],
  },
  {
    muscle: "Back",
    id: 3,
    exercises: [
      { id: 301, exercise: "Pullups" },
      { id: 302, exercise: "Bent-Over Row" },
      { id: 303, exercise: "Back Extension" },
      { id: 304, exercise: "Deadlift" },
      { id: 305, exercise: "Lat Pulldown" },
      { id: 306, exercise: "Seated Cable Row" },
      { id: 307, exercise: "Single Arm Dumbell Row" },
      { id: 308, exercise: "Incline Dumbbell Row" },
      { id: 309, exercise: "Chinups" },
      { id: 310, exercise: "Deficit Deadlift" },
      { id: 311, exercise: "Chest Supported Row" },

    ],
  },
  {
    muscle: "Triceps",
    id: 4,
    exercises: [
      { id: 401, exercise: "Triceps Dip" },
      { id: 402, exercise: "Dumbell Floor Press" },
      { id: 403, exercise: "EX Bar Skullcrusher" },
      { id: 404, exercise: "Lying Triceps Extension" },
      { id: 405, exercise: "Cable Triceps Pushdowns" },
      { id: 406, exercise: "Seated Triceps Press" },
      { id: 407, exercise: "One-Arm Overhead Extension" },
      { id: 408, exercise: "Close-Grip Pushups" },
    ],
  },
  {
    muscle: "Shoulders",
    id: 5,
    exercises: [
      { id: 501, exercise: "Military Press" },
      { id: 502, exercise: "Dumbell Press" },
      { id: 503, exercise: "Barbell Overhead Press" },
      { id: 504, exercise: "Lateral Raises" },
      { id: 505, exercise: "Face Pulls" },
      { id: 506, exercise: "Clean and Press" },
      { id: 507, exercise: "Front Raises" },
      { id: 508, exercise: "Machine Shoulder Press" },
      { id: 509, exercise: "Bent-Over Reverse Flyes" },
      { id: 510, exercise: "Upright Rows" },
    ],
  },
  {
    muscle: "Abs",
    id: 6,
    exercises: [
      { id: 601, exercise: "Crunches" },
      { id: 602, exercise: "Ab Wheel Rollout" },
      { id: 603, exercise: "Mountain Climbers" },
      { id: 604, exercise: "Leg Raises" },
      { id: 605, exercise: "Planks" },
      { id: 606, exercise: "Deadbug" },
      { id: 607, exercise: "Russian Twist" },
      { id: 608, exercise: "Flutter Kick" },
      { id: 609, exercise: "Seated Knee Tuck" },
      { id: 610, exercise: "Side Plank" },
      { id: 611, exercise: "Situps" },
      { id: 612, exercise: "V-Ups" },
      { id: 613, exercise: "Woodchoppers" },
    ],
  },
  {
    muscle: "Legs",
    id: 7,
    exercises: [
      { id: 701, exercise: "Front Squat" },
      { id: 702, exercise: "Back Squat" },
      { id: 703, exercise: "Leg Press" },
      { id: 704, exercise: "Lunges" },
      { id: 705, exercise: "Bulgarian Split Squat" },
      { id: 706, exercise: "Step Up" },
      { id: 707, exercise: "Leg Raises" },
      { id: 708, exercise: "Romanian Deadlift" },
      { id: 709, exercise: "Leg Curls" },
      { id: 710, exercise: "Kettlebell Swings" },
      { id: 711, exercise: "Hip Thrusts" },
      { id: 712, exercise: "Glute Bridges" },
      { id: 713, exercise: "Calf Raises" },
      { id: 714, exercise: "Goblet Squat" },
      { id: 715, exercise: "Single Leg Deadlift" },
      { id: 716, exercise: "Hack Squat" },
      { id: 717, exercise: "Good Mornings" },
    ],
  },
  {
    muscle: "Traps",
    id: 8,
    exercises: [
      { id: 801, exercise: "Dumbells Shrugs" },
      { id: 802, exercise: "Barbell Shrugs" },
      { id: 803, exercise: "Farmer's Walk" },
      { id: 804, exercise: "Rack Pulls" },
      { id: 805, exercise: "Pullup Shrug" },
      { id: 806, exercise: "Dumbbell Overhead Carry" },
      { id: 807, exercise: "Snatch-Grip Barbell High Pull" },
      { id: 808, exercise: "Romanian Deadlift" },
      { id: 809, exercise: "Leg Curls" },
      { id: 810, exercise: "Kettlebell Swings" },
    ],
  },
];

const exerciseList = {
  chest: {
    id: 1,
    exercises: [
      { id: 101, exercise: "Dumbell Bench Press" },
      { id: 102, exercise: "Close-Grip Bench Press" },
      { id: 103, exercise: "Incline Bench Press" },
      { id: 104, exercise: "Decline Bench Press" },
      { id: 105, exercise: "Barbell Bench Press" },
      { id: 106, exercise: "Dumbell Flyes" },
      { id: 107, exercise: "Pushups" },
      { id: 108, exercise: "Cables Flyes" },
      { id: 109, exercise: "Chest Dips" },
    ],
  },
  biceps: {
    id: 2,
    exercises: [
      { id: 201, exercise: "Hammer Curl" },
      { id: 202, exercise: "EZ Bar Curl" },
      { id: 203, exercise: "Dumbell Bicep Curl" },
      { id: 204, exercise: "Barbell Bicep Curl" },
      { id: 205, exercise: "Cable Curl" },
      { id: 206, exercise: "Machine Bicep Curl" },
      { id: 207, exercise: "Preacher Curl" },
    ],
  },
  back: {
    id: 3,
    exercises: [
      { id: 301, exercise: "Pullups" },
      { id: 302, exercise: "Bent-Over Row" },
      { id: 303, exercise: "Back Extension" },
      { id: 304, exercise: "Deadlift" },
      { id: 305, exercise: "Lat Pulldown" },
      { id: 306, exercise: "Seated Cable Row" },
      { id: 307, exercise: "Single Arm Dumbell Row" },
      { id: 308, exercise: "Good Morning" },
      { id: 309, exercise: "Incline Dumbbell Row" },
      { id: 310, exercise: "Chinups" },
      { id: 311, exercise: "Deficit Deadlift" },
    ],
  },
  triceps: {
    id: 4,
    exercises: [
      { id: 401, exercise: "Triceps Dip" },
      { id: 402, exercise: "Dumbell Floor Press" },
      { id: 403, exercise: "EX Bar Skullcrusher" },
      { id: 404, exercise: "Lying Triceps Extension" },
      { id: 405, exercise: "Cable Triceps Pushdowns" },
      { id: 406, exercise: "Seated Triceps Press" },
      { id: 407, exercise: "One-Arm Overhead Extension" },
      { id: 408, exercise: "Close-Grip Pushups" },
    ],
  },
  shoulders: {
    id: 5,
    exercises: [
      { id: 501, exercise: "Military Press" },
      { id: 502, exercise: "Dumbell Press" },
      { id: 503, exercise: "Barbell Overhead Press" },
      { id: 504, exercise: "Lateral Raises" },
      { id: 505, exercise: "Face Pulls" },
      { id: 506, exercise: "Clean and Press" },
      { id: 507, exercise: "Front Raises" },
      { id: 508, exercise: "Machine Shoulder Press" },
      { id: 509, exercise: "Bent-Over Reverse Flyes" },
      { id: 510, exercise: "Upright Rows" },
    ],
  },
  abs: {
    id: 6,
    exercises: [
      { id: 601, exercise: "Crunches" },
      { id: 602, exercise: "Ab Wheel Rollout" },
      { id: 603, exercise: "Mountain Climbers" },
      { id: 604, exercise: "Leg Raises" },
      { id: 605, exercise: "Planks" },
      { id: 606, exercise: "Deadbug" },
      { id: 607, exercise: "Russian Twist" },
      { id: 608, exercise: "Flutter Kick" },
      { id: 609, exercise: "Seated Knee Tuck" },
      { id: 610, exercise: "Side Plank" },
      { id: 611, exercise: "Situps" },
      { id: 612, exercise: "V-Ups" },
      { id: 613, exercise: "Woodchoppers" },
    ],
  },
  legs: {
    id: 7,
    exercises: [
      { id: 701, exercise: "Front Squat" },
      { id: 702, exercise: "Back Squat" },
      { id: 703, exercise: "Leg Press" },
      { id: 704, exercise: "Lunges" },
      { id: 705, exercise: "Bulgarian Split Squat" },
      { id: 706, exercise: "Step Up" },
      { id: 707, exercise: "Leg Raises" },
      { id: 708, exercise: "Romanian Deadlift" },
      { id: 709, exercise: "Leg Curls" },
      { id: 710, exercise: "Kettlebell Swings" },
      { id: 711, exercise: "Hip Thrusts" },
      { id: 712, exercise: "Glute Bridges" },
      { id: 713, exercise: "Calf Raises" },
      { id: 714, exercise: "Goblet Squat" },
      { id: 715, exercise: "Single Leg Deadlift" },
      { id: 716, exercise: "Hack Squat" },
    ],
  },
  traps: {
    id: 8,
    exercises: [
      { id: 801, exercise: "Dumbells Shrugs" },
      { id: 802, exercise: "Barbell Shrugs" },
      { id: 803, exercise: "Farmer's Walk" },
      { id: 804, exercise: "Rack Pulls" },
      { id: 805, exercise: "Pullup Shrug" },
      { id: 806, exercise: "Dumbbell Overhead Carry" },
      { id: 807, exercise: "Snatch-Grip Barbell High Pull" },
      { id: 808, exercise: "Romanian Deadlift" },
      { id: 809, exercise: "Leg Curls" },
      { id: 810, exercise: "Kettlebell Swings" },
    ],
  },
};

const exerciseArray = Object.keys(exerciseList);

export { exerciseList, exerciseArray, exerciseList1 };
