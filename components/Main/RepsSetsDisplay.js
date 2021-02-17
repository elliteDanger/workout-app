import { Card, CardBody } from "@windmill/react-ui";

const RepsSetsDisplay = ({ currentExerciseData }) => {
  const randomNum = Math.floor(Math.random() * 100);
  const randomKey = (num) => (num + randomNum) * randomNum;

  return currentExerciseData.sets.map((m, index) => (
    <Card key={randomKey(index)}>
      <CardBody>
        <p className=" font-semibold text-gray-800 dark:text-gray-300 text-center text-xl">
          Set {index + 1}
        </p>
        <div className="flex flex-col md:flex-row justify-around p-2 mx-4 mb-2 bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
          <div className="flex justify-between p-2   ">
            <label className="self-end  ">Weight</label>
            <p className=" font-medium ml-3  text-right ">{m.weight} lbs</p>
          </div>
          <div className="flex justify-between p-2   ">
            <label className="self-end  ">Reps</label>
            <p className=" font-medium ml-3 capitalize text-right ">{m.reps}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  ));
};

export default RepsSetsDisplay;
