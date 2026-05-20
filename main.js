unitree_g1_minimal.xml
<?xml version="1.0" encoding="utf-8"?>
<mujoco model="unitree_g1_minimal">
    <compiler angle="degree" coordinate="local"/>
    <option timestep="0.002" gravity="0 0 -9.81" iterations="30"/>

    <!-- World -->
    <worldbody>
        <!-- Ground plane -->
        <geom name="ground" type="plane" pos="0 0 0" size="5 5 0.1" material="ground_mat"/>
        <!-- Pelvis base (free joint for full dynamics) -->
        <body name="pelvis" pos="0 0 0.9">
            <joint name="floating_base_joint" type="free" limited="false"/>
            <geom type="sphere" size="0.07" rgba="0.8 0.2 0.2 1"/>
            <!-- Simple torso -->
            <body name="torso" pos="0 0 0.2">
                <geom type="box" size="0.12 0.07 0.15" rgba="0.2 0.2 0.8 1"/>
            </body>
            <!-- Left leg -->
            <body name="leg_left_hip" pos="-0.08 0.05 0">
                <joint name="hip_left_pitch" type="hinge" axis="1 0 0" limited="true" range="-45 45"/>
                <geom type="capsule" size="0.04 0.15" fromto="0 0 0 0 0 -0.3" rgba="0.2 0.8 0.2 1"/>
                <body name="leg_left_knee" pos="0 0 -0.3">
                    <joint name="knee_left" type="hinge" axis="1 0 0" limited="true" range="0 90"/>
                    <geom type="capsule" size="0.035 0.15" fromto="0 0 0 0 0 -0.3" rgba="0.2 0.8 0.2 1"/>
                </body>
            </body>
            <!-- Right leg (mirrored) -->
            <body name="leg_right_hip" pos="-0.08 -0.05 0">
                <joint name="hip_right_pitch" type="hinge" axis="1 0 0" limited="true" range="-45 45"/>
                <geom type="capsule" size="0.04 0.15" fromto="0 0 0 0 0 -0.3" rgba="0.2 0.8 0.2 1"/>
                <body name="leg_right_knee" pos="0 0 -0.3">
                    <joint name="knee_right" type="hinge" axis="1 0 0" limited="true" range="0 90"/>
                    <geom type="capsule" size="0.035 0.15" fromto="0 0 0 0 0 -0.3" rgba="0.2 0.8 0.2 1"/>
                </body>
            </body>
        </body>
    </worldbody>

    <!-- Actuators -->
    <actuator>
        <motor joint="hip_left_pitch" ctrlrange="-1 1" gear="100"/>
        <motor joint="knee_left" ctrlrange="-1 1" gear="100"/>
        <motor joint="hip_right_pitch" ctrlrange="-1 1" gear="100"/>
        <motor joint="knee_right" ctrlrange="-1 1" gear="100"/>
    </actuator>

    <material name="ground_mat" rgba="0.9 0.9 0.9 1"/>
</mujoco>
<!-- ✓ Done — unitree_g1_minimal.xml created. -->