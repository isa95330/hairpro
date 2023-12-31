<?php


use Faker\Factory;
use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class UsersFixtures extends Fixture
{
    public function __construct(
        private UserPasswordHasherInterface $passwordEncoder,
        private SluggerInterface $sluggerInterface
    ) {
    }


    public function load(ObjectManager $manager): void
    {
        $admin = new User();
        $admin->setEmail('isabelle@gmail.fr');
        $admin->setLastname('maze');
        $admin->setFirstname('isa');
        $admin->setAddress('10 rue curie');
        $admin->setZipcode('75007');
        $admin->setCity('Paris');
        $admin->setPassword(
            $this->passwordEncoder->hashPassword($admin, 'admin')
        );
        $admin->setRoles(['ROLE_ADMIN']);
        $manager->persist($admin);

        $faker = Factory::create('fr_FR');

        for ($usr = 1; $usr <= 2; $usr++) {
            $user = new User();
            $user->setEmail($faker->email);
            $user->setLastname($faker->lastname);
            $user->setFirstname($faker->firstname);
            $user->setAddress($faker->streetAddress);
            $user->setZipcode(str_replace(' ', ' ', $faker->postcode));
            $user->setCity($faker->city);
            $user->setPassword(
                $this->passwordEncoder->hashPassword($user, 'secret')
            );
            $manager->persist($user);
        }
        $manager->flush();
    }
}