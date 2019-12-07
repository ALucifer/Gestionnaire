<?php
namespace App\Services;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Encoder\NativePasswordEncoder;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoder;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class DefaultUser
{
    /** @var EntityManagerInterface $em */
    private $em;
    /** @var UserPasswordEncoderInterface $encoder */
    private $encoder;

    /**
     * DefaultUser constructor.
     * @param EntityManagerInterface $entityManager
     * @param UserPasswordEncoderInterface $encoder
     */
    public function __construct(EntityManagerInterface $entityManager, UserPasswordEncoderInterface $encoder)
    {
        $this->em = $entityManager;
        $this->encoder = $encoder;
    }

    /**
     * Create the default user
     */
    public function createDefaultUser()
    {
        $user = new User();
        $user->setEmail("test@test.com");
        $user->setPassword($this->encoder->encodePassword($user,"test"));

        $this->em->persist($user);
        $this->em->flush();
    }
}